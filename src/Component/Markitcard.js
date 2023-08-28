import React from "react";
import { useState } from "react";
import Payment from "./Payment";
import Dummycard from "./Dummycard";

const Markitcard = (props) => {
  const { name, img, description, reviews, rate, delivery } = props;

  const [status, setStatus] = useState(false);
  const [viewstatus, setViewstatus] = useState(false);
  const [dummycard, setDummeycard] = useState(false);

  const viewpayment = () => {
    setViewstatus(!viewstatus);
  };
  return (
    <div>
      <div>
        <div className="w-[250px] h-[460px]  mx-24 my-4  ml-[-2px]  border-2 rounded-md ">
          <div>
            <img className="w-[250px] h-[200px] " src={img} alt="" />
          </div>

          {status && <h1 className="bg-green-700 text-white w-[80px]">Sold</h1>}

          <div className="mt-[20px] ml-[10px] ">
            <p className="font-bold my-3">{name}</p>
            <p className="">{description}</p>
            <p className="mt-1">{rate}</p>
            <p className="mt-2 ">{delivery}</p>
            <p className="mt-2  ">{reviews}</p>
          </div>
          <div className="flex ml-[10px]">
            {" "}
            <button
              className="w-[100px] h-[40px] bg-green-400 text-white rounded-md mt-5"
              onClick={viewpayment}
            >
              buy now
            </button>
            {viewstatus && (
              <Payment
                status={status}
                setStatus={setStatus}
                dummycard={dummycard}
                setDummeycard={setDummeycard}
              />
            )}
            <button className="w-[100px] mx-2 h-[40px] bg-green-400 text-white rounded-md mt-5">
              Visit
            </button>
            {dummycard && (
              <Dummycard
                name={name}
                img={img}
                description={description}
                reviews={reviews}
                delivery={delivery}
                rate={rate}
                status={status}
                setStatus={setStatus}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Markitcard;
