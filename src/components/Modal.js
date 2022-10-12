/** @format */
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

function Modal({ setShowModal }) {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 bg-[#000000c9] ">
      <div className="flex items-center justify-center h-full z-10">
        <div className="bg-white h-[260px] w-[450px] rounded-[4px] bg-opacity-[1] ">
          <div className="flex items-center p-2 border-b border-gray-300">
            <AiOutlineClose
              size={24}
              className="mr-[90px] cursor-pointer"
              onClick={() => setShowModal((prev) => (prev = !prev))}
            />
            <h2 className="text-lg font-[600]">Make A Post</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
