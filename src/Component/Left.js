import React from "react";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import { HiDotsVertical, HiOutlineUserGroup } from "react-icons/hi";
import { LuDisc2 } from "react-icons/lu";

const Left = () => {
  return (
    <div className="flex justify-between h-[60px] items-center shadow-md  bg-gray-900 py-4">
      <div className="w-full h-full max-w-[1240px] flex ">
        <div className="w-[40px] h-[50px] md:ml-4 md:mt-1 rounded-full">
          <img
            src="./beauty.jpg"
            className="h-[40px] mt-[-11px] rounded-full"
            alt=""
          />
        </div>

        <div className="flex ml-[120px]">
          <ul className="flex ">
            <li className=" px-2 mx-3">
              <HiOutlineUserGroup size={20} />
            </li>
            <li className=" px-2 mx-3">
              <LuDisc2 size={20} />
            </li>
            <li className=" px-2 mx-3">
              <HiChatBubbleBottomCenterText size={20} />
            </li>
            <li className=" px-2 mx-3">
              <HiDotsVertical size={20} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Left;
