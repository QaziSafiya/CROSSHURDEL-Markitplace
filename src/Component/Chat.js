import React, { useState } from "react";
import { LuChevronDown } from "react-icons/lu";
const Chat = () => {
  const data = [
    {
      id: 1,
      img: "./beauty.jpg",
      heading: "Masters",
      chat: "pics",
      day: "today",
    },
    {
      id: 2,
      img: "./beauty.jpg",
      heading: "Nancy",
      chat: "pics",
      day: "today",
    },
    {
      id: 3,
      img: "./beauty.jpg",
      heading: "Nancy",
      chat: "pics",
      day: "today",
    },
    {
      id: 4,
      img: "./beauty.jpg",
      heading: "Nancy",
      chat: "pics",
      day: "today",
    },
    {
      id: 5,
      img: "./beauty.jpg",
      heading: "Nancy",
      chat: "pics",
      day: "today",
    },
    {
      id: 6,
      img: "./beauty.jpg",
      heading: "Nancy",
      chat: "pics",
      day: "today",
    },
    {
      id: 7,
      img: "./beauty.jpg",
      heading: "Nancy",
      chat: "pics",
      day: "today",
    },
    {
      id: 8,
      img: "./beauty.jpg",
      heading: "Nancy",
      chat: "pics",
      day: "today",
    },
  ];

  const [chat, setChat] = useState(data);

  return (
    <div className="mt-9">
      {chat.map((e) => {
        return (
          <div>
            <div className="flex justify-between h-[60px] items-center shadow-md bg-gray-900    py-8 rounded-md my-1 hover:bg-gray-800 ">
              <div className="w-[40px] h-[40px]  md:ml-4 md:mt-1 rounded-full flex ">
                <img src={e.img} className="rounded-full " alt="" />
                <h1 className="ml-[50px] font-bold">{e.heading}</h1>
                <span className="mt-5 ml-[-40px] text-[13px] ">{e.chat}</span>
              </div>

              <div className="flex text">
                <ul className="flex ">
                  <li className=" px-2 mx-3 mt-3">{e.day}</li>
                </ul>
                <span className="mt-6 hover:text-white text-gray-400">
                  <LuChevronDown size={20} />
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// hello safiya
export default Chat;
