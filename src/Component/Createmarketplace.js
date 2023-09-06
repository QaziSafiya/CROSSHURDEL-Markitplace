import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { LuX } from "react-icons/lu";
import { lazy, Suspense } from "react";
import Markit from "./Markit";
import Chatdiv from "./Chatdiv";
import Chatting from "./Chatting";


const Createmarketplace = (props) => {
  // const { name, buysell } = props;
  const [name, setname]  =useState('');
  const[buysell,setBuysell] = useState('');
  const [show, setShow] = useState(false);
  const [vision, setVision] = useState(true);
const Chatdiv = lazy(() => import("./Chatdiv.js"));
const [showmarket, setshowmarket] = useState(false);

  const handleclick = () => {
    setShow(!show);
    setVision(true);
  };

  return (
    <div>
      <button
        onClick={handleclick}
        className="w-[30px] h-8 px-1 hover:rounded-full hover:bg-slate-400 group-hover:rotate-90 duration-300"
      >
        {show ? <FaPlus size={20} /> : <LuX size={20} />}
      </button>
      {show && (
        <Markit
          className="hover:mt-[-200px] duration-500"
          show={show}
          setShow={setShow}
          setshowmarket={setshowmarket}
          setname={setname}
          setBuysell = {setBuysell}
        />
      )}
      {showmarket && (
        <Suspense fallback={<h1>Loading the chatdiv</h1>}>
        <Chatdiv name={name} buysell={buysell} />
      </Suspense>
      )}
    </div>
  );
};

export default Createmarketplace;
