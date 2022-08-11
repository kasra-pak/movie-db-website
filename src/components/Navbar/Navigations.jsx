import React from "react";
import NavLink from "./NavLink";

function Navigations() {
  return (
    <ul id='mobile-menu' className={`hidden gap-x-1 md:flex`}>
      <NavLink linkTo='/'>Movies</NavLink>

      <NavLink linkTo='/'>TV Shows</NavLink>

      <NavLink linkTo='/watchlist'>Watch List</NavLink>
    </ul>
  );
}

export default Navigations;
