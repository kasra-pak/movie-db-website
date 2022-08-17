import { useEffect, useState } from "react";
import { getDetail } from "../api/functions";
import { useCurrentUserData } from "./UserHooks";
import { updateUserWatchlist } from "../firebase";

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
  const [userData] = useCurrentUserData();
  const [watched, setWatched] = useState([]);
  const [unWatched, setUnwatched] = useState([]);

  useEffect(() => {
    if (userData.watchlist) {
      userData.watchlist.forEach(item => {
        getDetail(item.media, item.id).then(data => {
          item.watchedDate
            ? setWatched(prevState => [
                ...prevState,
                { ...data, media: item.media },
              ])
            : setUnwatched(prevState => [
                ...prevState,
                { ...data, media: item.media },
              ]);
        });
      });
    }
  }, [userData]);

  return [watched, unWatched];
}

export { useMediaWatchlist, useCurrentUserWatchlist };
