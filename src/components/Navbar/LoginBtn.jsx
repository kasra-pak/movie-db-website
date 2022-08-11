import React from "react";
import { Link } from "react-router-dom";
import { logOutUser } from "../../firebase";
import { useCurrentUserData } from "../../hooks/UserHooks";
import Tooltip from "../Shared/Tooltip";
import Logout from "../../images/login/logout.svg";
import Spinner from "../../images/loading/spinner.svg";

function LoginBtn() {
  const [userData, userDataStatus] = useCurrentUserData();

  if (userDataStatus === "success") {
    return (
      <div className='hidden justify-around items-center border-2 border-primary rounded-md md:flex'>
        <p className='w-max text-primary capitalize px-2 py-1'>
          {userData.name}
        </p>
        <Tooltip label='Logout' className=''>
          <button
            onClick={logOutUser}
            className='block rounded-r-sm text-gray-900 px-2 py-1 bg-primary'
          >
            <Logout className='w-7 fill-secondary' />
          </button>
        </Tooltip>
      </div>
    );
  }

  return (
    <Link
      to='/login'
      className='hidden min-w-[100px] justify-center text-gray-900 bg-primary px-3 py-2 rounded-md md:flex'
    >
      {userDataStatus === "loading" ? (
        <Spinner className='fill-secondary w-7' />
      ) : (
        "Log In"
      )}
    </Link>
  );
}

export default LoginBtn;

// return Object.entries(userData).length ? (
//   <div className='hidden justify-around items-center border-2 border-primary rounded-md md:flex'>
//     <p className='w-max text-primary capitalize px-2 py-1'>{userData.name}</p>
//     <Tooltip label='Logout' className=''>
//       <button
//         onClick={logOutUser}
//         className='block rounded-r-sm text-gray-900 px-2 py-1 bg-primary'
//       >
//         <Logout className='w-7 fill-secondary' />
//       </button>
//     </Tooltip>
//   </div>
// ) : (
//   <Link
//     to='/login'
//     className='hidden md:block text-gray-900 bg-primary px-3 py-1 rounded-md'
//   >
//     Log In
//   </Link>
// );
