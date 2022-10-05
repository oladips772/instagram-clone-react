/** @format */
import React from "react";
import {
  AiFillHome,
  AiOutlineHeart,
  AiOutlinePlusCircle,
} from "react-icons/ai";

function Header() {
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
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png"
          alt=""
          className="h-[30px] w-[30px] rounded-full"
        />
      </div>
    </div>
  );
}

export default Header;
