import React from "react";

import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Detail from "@/pages/Detail";
import Watchlist from "@/pages/Watchlist";
import AllResults from "@/pages/AllResult";
import Search from "@/pages/Search";
import NotFound from "@/pages/NotFound";

const routesData = [
  {
    path: "/",
    element: <Home />,
    title: "home",
  },

  {
    path: "/login",
    element: <Login />,
    title: "login",
  },

  {
    path: "/signup",
    element: <Signup />,
    title: "signup",
  },

  {
    path: "/detail/:media/:id",
    element: <Detail />,
    title: "detail",
  },

  {
    path: "/watchlist",
    element: <Watchlist />,
    title: "watchlist",
  },

  {
    path: "/all/:resultsFor/:media",
    element: <AllResults />,
    title: "results",
  },

  {
    path: "/search/:query/",
    element: <Search />,
    title: "results",
  },

  {
    path: "*",
    element: <NotFound />,
    title: "notFound",
  },
];

export default routesData;
