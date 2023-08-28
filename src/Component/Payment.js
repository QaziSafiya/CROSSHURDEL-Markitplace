import React from "react";
import { useState } from "react";
const Payment = (props) => {
  const { status, setStatus, setDummeycard } = props;

  const payment = () => {
    setStatus(true);
    alert("payment sucessful");
    setDummeycard(true);
  };
  return (
    <div>
      <div className="bg-gray-600 text-white w-[80px] h-[30px] ml-2 rounded-md ">
        <button onClick={payment} className="px-2 mx-1">
          payment
        </button>
      </div>
    </div>
  );
};

export default Payment;
