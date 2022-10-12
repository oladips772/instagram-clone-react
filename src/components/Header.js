/** @format */
import React from "react";
import {
  AiFillHome,
  AiOutlineHeart,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

function Header() {
  const [user] = useAuthState(auth);
  console.log(user);

  function login() {
    signInWithPopup(auth, provider);
  }

  return (
    <div className="flex items-center justify-around h-[55px] shadow">
      <img
        src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
        className="h-[30px] object-contain cursor-pointer"
        alt=""
      />
      <div className="flex items-center space-x-4">
        <AiFillHome size={26} />
        <AiOutlineHeart size={26} />
        <AiOutlinePlusCircle size={26} />
        {user ? (
          <img
            src={user.photoURL}
            alt=""
            className="h-[30px] w-[30px] rounded-full"
          />
        ) : (
          <button onClick={login}>Login</button>
        )}
      </div>
    </div>
  );
}

export default Header;
