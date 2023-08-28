import React, { useState } from "react";
import Markitcard from "./Markitcard";
import { FaSearch } from "react-icons/fa";
import Upload from "./Upload";
import Remove from "./Remove";
const Viewbuysell = () => {
  const viewdata = [
    {
      id: 2,
      name: "Vintage jhumka",
      img: "./img2.png",
      description: "lorem lorem o",
      status: "false",
      delivery: "free Delivery",
      reviews: "3350 Reviews",
      rate: "₹200",
      category: "Jwellary",
    },
    {
      id: 3,
      name: "Jhumka",
      img: "./img3.png",
      description: "lorem lorem o",
      status: "false",
      delivery: "free Delivery",
      reviews: "3350 Reviews",
      rate: "₹200",
      category: "Jwellary",
    },
    {
      id: 4,
      name: "Jhumki",
      img: "./img4.png",
      description: "lorem lorem o",
      status: "false",
      delivery: "free Delivery",
      reviews: "3350 Reviews",
      rate: "₹200",
      category: "Jwellary",
    },
    {
      id: 5,
      name: "Purse",
      img: "./img5.png",
      description: "lorem lorem o",
      status: "false",
      delivery: "free Delivery",
      reviews: "3350 Reviews",
      rate: "₹200",
      category: "Bags",
    },
    {
      id: 6,
      name: "Fancystyle purse",
      img: "./img6.png",
      description: "lorem lorem o",
      status: "false",
      delivery: "free Delivery",
      reviews: "3350 Reviews",
      rate: "₹200",
      category: "Bags",
    },
    {
      id: 7,
      name: "Girlishlook purse",
      img: "./img7.png",
      description: "lorem lorem o",
      status: "false",
      delivery: "free Delivery",
      reviews: "3350 Reviews",
      rate: "₹200",
      category: "Bags",
    },
    {
      id: 8,
      name: "Green purse",
      img: "./img8.png",
      description: "lorem lorem o",
      status: "false",
      delivery: "free Delivery",
      reviews: "3350 Reviews",
      rate: "₹200",
      category: "Bags",
    },
    {
      id: 9,
      name: "Pink purse",
      img: "./img9.png",
      description: "lorem lorem o",
      status: "false",
      delivery: "free Delivery",
      reviews: "3350 Reviews",
      rate: "₹200",
      category: "Bags",
    },
    {
      id: 10,
      name: "Kurti",
      img: "./img10.png",
      description: "lorem lorem o",
      status: "false",
      delivery: "free Delivery",
      reviews: "3350 Reviews",
      rate: "₹200",
      category: "Kurti",
    },
    {
      id: 11,
      name: "Punjabi kurti",
      img: "./img11.png",
      description: "lorem lorem o",
      status: "false",
      delivery: "free Delivery",
      reviews: "3350 Reviews",
      rate: "₹200",
      category: "Kurti",
    },
    {
      id: 12,
      name: "Stylish Kurti",
      img: "./img12.png",
      description: "lorem lorem o",
      status: "false",
      delivery: "free Delivery",
      reviews: "3350 Reviews",
      rate: "₹200",
      category: "Kurti",
    },
    {
      id: 13,
      name: "Top",
      img: "./img13.png",
      description: "lorem lorem o",
      status: "false",
      delivery: "free Delivery",
      reviews: "3350 Reviews",
      rate: "₹200",
      category: "Kurti",
    },
    {
      id: 1,
      name: "Fancy",
      img: "./img14.png",
      description: "lorem lorem o",
      status: "false",
      delivery: "free Delivery",
      reviews: "3350 Reviews",
      rate: "₹200",
      category: "Kurti",
    },
    {
      id: 15,
      name: "pink kurti",
      img: "./img15.png",
      description: "lorem lorem o",
      status: "false",
      delivery: "free Delivery",
      reviews: "3350 Reviews",
      rate: "₹200",
      category: "Kurti",
    },
    {
      id: 16,
      name: "blue kurti",
      img: "./img16.png",
      description: "lorem lorem o",
      status: "false",
      delivery: "free Delivery",
      reviews: "3350 Reviews",
      rate: "₹200",
      category: "Kurti",
    },
    {
      id: 17,
      name: "Alphapro watch",
      img: "./img17.png",
      description: "lorem lorem o",
      status: "false",
      delivery: "free Delivery",
      reviews: "3350 Reviews",
      rate: "₹200",
      category: "watches",
    },
    {
      id: 18,
      name: "pro watch",
      img: "./img18.png",
      description: "lorem lorem o",
      status: "false",
      delivery: "free Delivery",
      reviews: "3350 Reviews",
      rate: "₹200",
      category: "watches",
    },
    {
      id: 19,
      name: "Alpha watch",
      img: "./img19.png",
      description: "lorem lorem o",
      status: "false",
      delivery: "free Delivery",
      reviews: "3350 Reviews",
      rate: "₹200",
      category: "watches",
    },

    {
      id: 20,
      name: "Alpha watch",
      img: "./img19.png",
      description: "lorem lorem o",
      status: "false",
      delivery: "free Delivery",
      reviews: "3350 Reviews",
      rate: "₹200",
      category: "watches",
    },
  ];

  // const [showdata, setShowdata] = useState(viewdata);

  const [filterdata, setFilterdata] = useState(viewdata);

  const filtercategory = (categItem) => {
    const updatedItems = viewdata.filter((currElem) => {
      return currElem.category === categItem;
    });
    setFilterdata(updatedItems);
    console.log(updatedItems);
  };

  const [search, setSearch] = useState("");

  return (
    <div className=" w-full h-full text-white    ">
      <div className="  w-full h-[80px] bg-green-200 flex justify-between items-center ">
        <div className="bg-white w-[400px] h-[50px] rounded-md ml-[200px] flex">
          <div className="mt-4">
            <FaSearch className=" ml-4 text-black" />
          </div>
          <div className=" mt-1">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-[350px] h-[40px] rounded-md px-3 text-black  bg-white ml-4 hover:border-none"
            />
          </div>
          <div className="mt-2 h-[40px]">
            <button
              className=" w-[100px] h-[40px] bg-black text-white ml-6 rounded-md "
              onClick={() => {
                const searchitem = filterdata.filter((ele) =>
                  ele.name.toLowerCase().includes(search.toLowerCase())
                );
                setFilterdata(searchitem);
              }}
            >
              Search
            </button>
          </div>
        </div>
        <div>
          <Remove viewdata={viewdata} />
        </div>
      </div>

      <div className="flex w-full mt-9 justify-center items-center ">
        <button
          className="w-[120px] h-[40px] bg-green-700 text-white rounded-md mt-5 mx-8"
          onClick={() => filtercategory("Bags")}
        >
          Bags & purse
        </button>
        <button
          className="w-[120px] h-[40px] bg-green-700 text-white rounded-md mt-5 mx-8"
          onClick={() => filtercategory("Jwellary")}
        >
          Jwellary
        </button>
        <button
          className="w-[120px] h-[40px] bg-green-700 text-white rounded-md mt-5 mx-8"
          onClick={() => filtercategory("Kurti")}
        >
          Kurti & top
        </button>
        <button
          className="w-[120px] h-[40px] bg-green-700 text-white rounded-md mt-5 mx-8"
          onClick={() => filtercategory("watches")}
        >
          Watches
        </button>
        <button
          className="w-[120px] h-[40px] bg-green-700 text-white rounded-md mt-5 mx-8"
          onClick={() => setFilterdata(viewdata)}
        >
          All
        </button>
      </div>
      <div className="max-w-[1240px] ml-[160px]  flex justify-center items-center w-full h-full   mt-12">
        <div className="grid grid-cols-4  my-9 py-7 ">
          {filterdata.map((e) => {
            return (
              <div key={e.id}>
                <Markitcard
                  name={e.name}
                  img={e.img}
                  description={e.description}
                  reviews={e.reviews}
                  delivery={e.delivery}
                  rate={e.rate}
                />
              </div>
            );
          })}
          <Upload />
        </div>
      </div>
    </div>
  );
};

export default Viewbuysell;
