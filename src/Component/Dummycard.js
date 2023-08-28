import React from "react";

const Dummycard = (props) => {
  const { name, img, description, reviews, rate, delivery, status, setstatus } =
    props;
  return (
    <div>
      <div>
        <div className="w-[270px] h-[460px]  mx-24 my-4 mt-[-400px] ml-[-180px]  border-2 rounded-md blur-md bg-green-100">
          <div>
            <img className="w-[250px] h-[200px] blur-md" src={img} alt="" />
            {status && (
              <h1 className="bg-green-700 text-black w-[80px]">Sold🟢</h1>
            )}
          </div>

          <div className="mt-[20px] ml-[10px] ">
            <p className="">{description}</p>
            <p className="mt-1">{rate}</p>
            <p className="mt-2 ">{delivery}</p>
            <p className="mt-2  ">{reviews}</p>
          </div>
          <div className="flex ml-[10px]">
            {" "}
            <button className="w-[100px] h-[40px] bg-green-100 text-white rounded-md mt-5">
              buy now
            </button>
            <button className="w-[100px] mx-2 h-[40px] bg-green-100 text-white rounded-md mt-5">
              Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dummycard;
