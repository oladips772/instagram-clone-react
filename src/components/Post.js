/** @format */
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

function Post({ post }) {
  return (
    <div className="border border-slate-200 my-4">
      {/* user info */}
      <div className="flex items-center p-2">
        <img
          src={post.userImg}
          className="h-[45px] w-[45px] rounded-full object-contain"
          alt=""
        />
        <div className="ml-2">
          <h3>{post.userName}</h3>
          <p className="text-sm text-gray-500">{post.userEmail}</p>
        </div>
      </div>
      <img src={post.postImg} alt="" />
      <div className="p-2 flex flex-row space-x-2">
        <AiFillHeart size={24}/>
        <FaRegCommentDots size={24}/>
        <FiSend size={24}/>
      </div>
    </div>
  );
}

export default Post;
