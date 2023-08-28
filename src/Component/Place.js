import { useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { lazy, Suspense } from "react";
const Chatdiv = lazy(() => import("./Chatdiv.js"));

const Place = () => {
  const [view, setView] = useState(true);
  const [showchat, setShowchat] = useState(false);
  const [name, setName] = useState("");
  const [buysell, setBuysell] = useState("");
  const [record, setRecord] = useState([]);

  const market = (e) => {
    e.preventDefault();
    const data = { name: name, buysell: buysell };
    const newdata = [...record, data];
    setRecord(newdata);
    setShowchat(true);
    setView(false);
  };

  return view ? (
    <div className="w-[400px] h-[300px] border-2 ml-[200px] rounded-md mt-[-500px] bg-slate-900 fixed text-white ">
      <h1 className="text-2xl mt-3 text-[#00FFAB] font-bold">
        {" "}
        Create Markit place
      </h1>

      <form onSubmit={market}>
        <div className="rounded-md w-[370px] ml-3 mt-8 h-[50px] border-2 border-gray-800">
          <input
            type="text"
            placeholder=" Business"
            className="rounded-md w-[370px]  h-[50px] px-4 bg-gray-800"
            onChange={(e) => setName(e.target.value)}
            name="name"
          />
        </div>

        <div className="rounded-md w-[370px] ml-3 mt-8 h-[50px] border-2 border-gray-800">
          <input
            type="text"
            placeholder="Code-KL12B"
            name="buysell"
            className="rounded-md w-[370px]  h-[50px] px-4 bg-slate-800"
            onChange={(e) => setBuysell(e.target.value)}
          />
        </div>
        <button
          className="w-[50px] h-[50px]  rounded-full mt-[30px] ml-[300px]  "
          type="submit"
        >
          <IoIosArrowDroprightCircle size={50} className="bg-gray-800" />
        </button>
      </form>
    </div>
  ) : (
    <Suspense fallback={<h1>Loading the chatdiv</h1>}>
      <Chatdiv name={name} buysell={buysell} />
    </Suspense>
  );
};
export default Place;
