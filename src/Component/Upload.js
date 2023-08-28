import React from "react";
import { useState, useRef } from "react";
const Upload = (props) => {
  const { name, img, description, reviews, rate, delivery, status, setstatus } =
    props;
  const inputRef = useRef(null);
  const [image, setImage] = useState([]);

  const selectfile = (e) => {
    const select = e.target.files;
    const newselect = Array.from(select);

    const Imagearray = newselect.map((file) => {
      return URL.createObjectURL(file);
    });

    setImage((previmage) => previmage.concat(Imagearray));
  };

  /**  {
                image.length>0 && image.length>10 ? <p>you can not upload more than 10 image</p>
            } */

  return (
    <div className="mt-[30px]">
      <div className=" flex justify-center items-center">
        <button className="w-[220px] h-[40px] bg-green-700 text-white rounded-md  mx-8">
          <input
            className=""
            type="file"
            ref={inputRef}
            onChange={selectfile}
            name="images"
            multiple
            accept="image/png , image/jpeg , image/"
          />
        </button>
      </div>

      <div className="grid grid-cols-4 mt-[120px] max-w-[1240px] gap-80">
        {image &&
          image.map((img) => {
            return (
              <div key={img}>
                <div className="w-[250px] h-[460px]  mx-24 my-4  ml-[-2px]  border-2 rounded-md ">
                  <div>
                    <img className="w-[250px] h-[200px] " src={img} alt="" />
                  </div>

                  <div className="mt-[20px] ml-[10px] ">
                    <p>name</p>
                    <p className="">lorem lorem lorem</p>
                    <p className="mt-1">200</p>
                    <p className="mt-2 ">free delivery</p>
                    <p className="mt-2  ">2250</p>
                  </div>

                  <div className="flex ml-[10px]">
                    <button className="w-[100px] h-[40px] bg-green-400 text-white rounded-md mt-5">
                      buy now
                    </button>
                    <button className="w-[100px] mx-2 h-[40px] bg-green-400 text-white rounded-md mt-5">
                      Visit
                    </button>
                    <button
                      className="w-[100px] mx-2 h-[40px] bg-green-400 text-white rounded-md mt-5"
                      onClick={() => setImage(image.filter((e) => e !== img))}
                    >
                      delete
                    </button>
                    ;
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Upload;
