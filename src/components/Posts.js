/** @format */
import React from "react";
import posts from "../data/posts";
import Post from "./Post";

const Posts = () => {
  return (
    <div>
      {posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </div>
  );
};

export default Posts;
