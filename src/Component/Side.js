import React from "react";
import Left from "./Left";
import Right from "./Right";
import Seacrch from "./Seacrch";
import Chat from "./Chat";

import Chatfooter from "./Chatfooter";
const Side = () => {
  return (
    <div className="w-full h-full flex flex-col md:mt-[30px]  text-white">
      <div className="max-w-[1240px] h-full border-2  border-gray-800 md:ml-[130px] flex">
        <div className="w-[500px] h-[700px] border-2 border-gray-800">
          <Left />
          <Seacrch />
          <Chat />
        </div>
        <div className="w-[840px] h-[700px] border-2 border-gray-800">
          <Right />

          <Chatfooter />
        </div>
      </div>
    </div>
  );
};

export default Side;
