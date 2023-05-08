import React from "react";
import { Routes, Route } from "react-router-dom";
import routesData from "./data";

const Router = () => (
  <Routes>
    {routesData.map(route => (
      <Route key={route.title} path={route.path} element={route.element} />
    ))}
  </Routes>
);

export default Router;
