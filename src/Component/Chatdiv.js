import React from "react";

import { Link } from "react-router-dom";
import { useState } from "react";
const Chatdiv = (props) => {
  const { name, buysell } = props;
  const [chatopen, setChatopen] = useState(false);

  const openchat = () => {
    setChatopen(!chatopen);
  };
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="text-white rounded-md  my-4   ml-[980px] mt-[-500px]  w-[240px] h-[280px] bg-slate-800">
        <img
          src="./beauty.jpg"
          className="rounded-full w-[30px] h-[30px] mt-[-1rem] ml-[-1rem]"
          alt=""
        />
        <h1 className="ml-[-150px] mt-[-10px] text-orange-600">Admin</h1>

        <label className="text-[12px] ml-[-140px]">Buy & Sell</label>
        <h1 className="w-[200px] h-[30px] relative my-7  mx-4  rounded-md  ml-5 shadow-md  text-black bg-[#00FFAB] mt-[20px]">
          {name}
        </h1>
        <h2 className="w-[200px] h-[30px] my-4 rounded-md ml-5 shadow-md mt-5 text-black bg-[#00FFAB]">
          {buysell}
        </h2>

        <Link to="/markit">
          {chatopen && (
            <button className="w-[300px] text-blue-500 h-[30px]  ml-[-30px] rounded-md">
              View Markit
            </button>
          )}
        </Link>

        <div className="text-white flex mt-[30px] ml-[80px]">
          <button
            className="w-[40px] h-[30px] bg-[#597f72] rounded-md text-black"
            onClick={openchat}
          >
            ON
          </button>
          <button
            className="w-[40px] h-[30px] bg-[#597f72] rounded-md text-black mx-3"
            onClick={openchat}
          >
            OFF
          </button>
          {chatopen && <h1>🟢</h1>}
        </div>
      </div>
    </div>
  );
};

export default Chatdiv;
