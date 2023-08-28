import React from "react";
import { FaMicrophone } from "react-icons/fa";
import { LuSmile } from "react-icons/lu";
import Createmarketplace from "./Createmarketplace";

const Chatfooter = () => {
  return (
    <div className=" w-full h-[60px] flex justify-between  items-center shadow-md border-2 border-gray-800 bg-gray-900 py-4 mt-[580px]">
      <div className=" w-[800px] grid grid-cols-4 ">
        <div className="w-[60px] h-[50px]  ml-[30px] mt-5">
          <LuSmile size={30} />
        </div>
        <div className="w-[80px] h-[50px] ml-[-150px] mt-5">
          <Createmarketplace />
        </div>
        <div className="w-[590px] h-[40px]  ml-[-270px] mt-4 rounded-md">
          <input
            type="text"
            placeholder="Type a message  "
            className="w-[590px] h-[40px] rounded-md px-3 bg-gray-800"
          />
        </div>
        <div className="w-[100px] h-[50px]  ml-[140px] mt-6">
          <FaMicrophone size={20} />
        </div>
      </div>
    </div>
  );
};

export default Chatfooter;
