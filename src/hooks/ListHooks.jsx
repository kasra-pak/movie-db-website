import { useEffect, useState } from "react";
import { getDetail } from "@/api/functions";
import { useCurrentUserData } from "./UserHooks";
import { updateUserWatchlist } from "@/firebase";
import useAsync from "./AsyncHooks";

function useMediaWatchlist(id) {
  const [userData] = useCurrentUserData();
  const [status, setStatus] = useState("notAdded");

  useEffect(() => {
    setStatus(() => {
      if (!userData.watchlist) return "notAdded";

      for (const item of userData.watchlist) {
        if (item.id === id) {
          return item.watchedDate ? "watched" : "added";
        }
      }

      return "notAdded";
    });
  }, [id, userData]);

  function removeFromWatchlist() {
    const newWatchlist = userData.watchlist.filter(item => item.id !== id);

    updateUserWatchlist(newWatchlist);
  }

  function addToWatchlist({ media, watchedDate, title }) {
    let newWatchlist = [...userData.watchlist];

    if (newWatchlist && newWatchlist.some(item => item.id === id)) {
      newWatchlist = newWatchlist.map(item =>
        item.id === id ? { id, media, watchedDate, title } : item
      );
    } else {
      newWatchlist.push({ id, media, watchedDate, title });
    }

    updateUserWatchlist(newWatchlist);
  }

  return [status, userData, addToWatchlist, removeFromWatchlist];
}

function useCurrentUserWatchlist() {
  const { run, data, isSuccess } = useAsync();
  const [userData] = useCurrentUserData();
  const [watched, setWatched] = useState([]);
  const [unWatched, setUnwatched] = useState([]);

  const fetchList = async list => {
    let result = [];

    for (const item of list) {
      const temp = await getDetail(item.media, item.id);

      result.push({ ...temp, watchedDate: item.watchedDate });
    }

    return result;
  };

  useEffect(() => {
    if (userData.watchlist) {
      run(fetchList(userData.watchlist));
    }
  }, [run, userData.watchlist]);

  useEffect(() => {
    if (isSuccess) {
      setWatched(data.filter(item => item.watchedDate));
      setUnwatched(data.filter(item => !item.watchedDate));
    }
  }, [data, isSuccess]);

  return [watched, unWatched];
}

export { useMediaWatchlist, useCurrentUserWatchlist };
