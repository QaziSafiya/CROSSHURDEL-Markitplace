import React from "react";
import { FaSearch } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import Remove from "./Remove";
const Right = () => {
  return (
    <div className="flex justify-between h-[60px] items-center shadow-lg border-2  border-gray-800 bg-gray-900 py-4">
      <div className="w-[40px] h-[40px] border-2 md:ml-4 md:mt-1 rounded-full flex ">
        <img src="./beauty.jpg" className="rounded-full" alt="" />
        <h1 className="ml-[50px] font-bold">Masters</h1>
        <span className="mt-5 ml-[-60px] text-[13px] ">gopi,shalu,you</span>
      </div>

      <div className="flex text">
        <ul className="flex ">
          <li className=" px-2 mx-3">
            <FaSearch />
          </li>
          <li className=" px-2 mx-3">
            <HiDotsVertical />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Right;
