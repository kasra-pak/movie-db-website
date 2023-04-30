import React from "react";
import { Link } from "react-router-dom";
import { logOutUser } from "@/firebase";
import { useCurrentUserData } from "@/hooks/UserHooks";
import Tooltip from "@/components/Shared/Tooltip";
import Logout from "@/images/login/logout.svg";
import Spinner from "@/images/loading/spinner.svg";

function LoginBtn() {
  const [userData, userDataStatus] = useCurrentUserData();

  if (userDataStatus === "success") {
    return (
      <div className='hidden items-center justify-around rounded-md border-2 border-primary md:flex'>
        <p className='w-max px-2 py-1 capitalize text-primary'>
          {userData.name}
        </p>
        <Tooltip label='Logout' className=''>
          <button
            onClick={logOutUser}
            className='block rounded-r-sm bg-primary px-2 py-1 text-gray-900'
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
      className='hidden min-w-[100px] justify-center rounded-md bg-primary px-3 py-2 text-gray-900 md:flex'
    >
      {userDataStatus === "loading" ? (
        <Spinner className='w-7 fill-secondary' />
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
