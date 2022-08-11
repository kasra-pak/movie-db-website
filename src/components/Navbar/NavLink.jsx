import React from "react";
import { Link } from "react-router-dom";

function NavLink({ children, linkTo = null }) {
  return (
    <li className='nav-link'>
      {linkTo ? (
        <Link to={linkTo} className='block p-2 sm:p-3'>
          {children}
        </Link>
      ) : (
        <div className='p-2 sm:p-3'>{children}</div>
      )}
    </li>
  );
}

export default NavLink;
