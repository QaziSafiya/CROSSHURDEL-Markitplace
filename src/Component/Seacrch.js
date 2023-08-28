import React from "react";
import { FaSearch } from "react-icons/fa";
const Seacrch = () => {
  return (
    <div>
      <div className="w-[400px] h-[50px] ml-4 mt-4 rounded-md bg-gray-900 shadow-md flex">
        <div className="w-[60px] h-[60px]  ml-4 mt-3">
          <FaSearch size={20} />
        </div>
        <div className="ml-4 w-[300px] mt-2 bg-gray-900">
          <input
            type="text"
            placeholder="Search or start new chat  "
            className=" h-8 w-[290px]  bg-gray-800 rounded-md flex justify-center items-center px-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Seacrch;
