import React from "react";
import { Link } from "react-router-dom";
import { logOutUser } from "@/firebase";
import { useCurrentUserData } from "@/hooks/UserHooks";
import Tooltip from "@/components/Shared/Tooltip";
import Logout from "@/images/home/logout.svg";
import Spinner from "@/images/loading/spinner.svg";

function LoginBtn() {
  const [userData, userDataStatus] = useCurrentUserData();

  if (userDataStatus === "success") {
    return (
      <div className='hidden items-center justify-around rounded-md border-2 border-midnightExpress md:flex'>
        <p className='w-max px-2 py-1 capitalize text-midnightExpress'>
          {userData.name}
        </p>
        <Tooltip label='Logout' className=''>
          <button
            onClick={logOutUser}
            className='block rounded-r-sm bg-midnightExpress px-2 py-1 text-gray-900'
          >
            <Logout className='fill-secondary w-7' />
          </button>
        </Tooltip>
      </div>
    );
  }

  return (
    <Link
      to='/login'
      className='hidden min-w-[100px] justify-center rounded-md bg-midnightExpress px-3 py-2 text-gray-900 md:flex'
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
//   <div className='hidden justify-around items-center border-2 border-midnightExpress rounded-md md:flex'>
//     <p className='w-max text-midnightExpress capitalize px-2 py-1'>{userData.name}</p>
//     <Tooltip label='Logout' className=''>
//       <button
//         onClick={logOutUser}
//         className='block rounded-r-sm text-gray-900 px-2 py-1 bg-midnightExpress'
//       >
//         <Logout className='w-7 fill-secondary' />
//       </button>
//     </Tooltip>
//   </div>
// ) : (
//   <Link
//     to='/login'
//     className='hidden md:block text-gray-900 bg-midnightExpress px-3 py-1 rounded-md'
//   >
//     Log In
//   </Link>
// );
