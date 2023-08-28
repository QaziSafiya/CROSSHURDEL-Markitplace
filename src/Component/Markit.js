import {
  FcAddImage,
  FcCamera,
  FcViewDetails,
  FcReadingEbook,
  FcPositiveDynamic,
  FcGenericSortingAsc,
} from "react-icons/fc";
import { useState } from "react";
import Place from "./Place";

const Markit = () => {
  const [toggleshow, setToggleshow] = useState(false);

  const toggle = () => {
    setToggleshow(true);
  };
  return (
    <div className="w-[200px] h-[250px] mt-[-330px] border-2 border-gray-800 bg-slate-900  rounded-md  duration-500 ">
      <div className="transition ease-out duration-500 cursor-pointer">
        <li className="py-2 flex justify-center ml-[-30px]">
          <span className="mx-2">
            <FcAddImage size={20} />
          </span>
          Photos & Vedios
        </li>
        <li className="py-2 flex justify-center ml-[-90px]">
          <span className="mx-2">
            <FcCamera size={20} />
          </span>
          Camera
        </li>
        <li className="py-2 flex justify-center ml-[-90px]">
          <span>
            <FcReadingEbook size={20} />
          </span>
          Contact
        </li>
        <li className="py-2 flex justify-center ml-[-70px]">
          <span>
            <FcViewDetails size={20} />
          </span>
          Document
        </li>
        <li className="py-2 flex justify-center ml-[-120px]">
          <span>
            <FcGenericSortingAsc size={20} />
          </span>
          Poll
        </li>
        <li className="py-2 flex justify-center ml-[-60px]">
          <span>
            <FcPositiveDynamic size={20} />
          </span>
          <button onClick={toggle}>Markit</button>
        </li>
      </div>
      {toggleshow && <Place />}
    </div>
  );
};
export default Markit;
