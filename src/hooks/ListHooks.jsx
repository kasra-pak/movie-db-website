import { useEffect, useState } from "react";
import { useCurrentUserData } from "./UserHooks";

function useMediaWatchlist(id) {
  const [userData, setUserData] = useCurrentUserData();
  const [state, setState] = useState("notAdded");

  // function toggleState(id) {
  //   if (!userData.watchlist) return "notAdded";

  //   for (const item of userData.watchlist) {
  //     if (item.id === id) {
  //       return item.watchedDate ? "watched" : "added";
  //     }
  //   }

  //   return "notAdded";
  // }

  useEffect(() => {
    setState(() => {
      if (!userData.watchlist) return "notAdded";

      for (const item of userData.watchlist) {
        if (item.id === id) {
          return item.watchedDate ? "watched" : "added";
        }
      }

      return "notAdded";
    });
  }, [userData]);

  function removeFromWatchlist(id) {
    const newWatchlist = userData.watchlist.filter(item => item.id === id);

    setUserData(prevState => ({ ...prevState, watchlist: newWatchlist }));

    setState("notAdded");
  }

  function addToWatchlist({ id, watchedDate }) {
    let newWatchlist = userData.watchlist;

    if (newWatchlist && newWatchlist.some(item => item.id === id)) {
      newWatchlist = newWatchlist.map(item =>
        item.id === id ? { id, watchedDate } : item
      );
    } else {
      newWatchlist.push({ id, watchedDate });
    }

    setUserData(prevState => ({ ...prevState, watchlist: newWatchlist }));

    watchedDate ? setState("watched") : setState("added");
  }

  return [state, userData, addToWatchlist, removeFromWatchlist];
}

/////////

export { useMediaWatchlist };
