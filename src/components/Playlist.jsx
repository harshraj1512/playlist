import React from "react";
import Navbar from "./Navbar";
import { IoMdLink } from "react-icons/io";

function Playlist() {
  return (
    <>
      <div className="flex flex-col min-w-fit container gap-y-4 ">
        <div>
          <Navbar />
        </div>
        <div className="px-5 flex justify-between">
          <a className="font-semibold text-lg text-white">Product Playlist</a>
          <button className="btn border-solid border-2 bg-sky-500">
            <div className="indicator gap-2 items-center">
              <span className=" text-xl rounded-md text-white"><IoMdLink /></span>
              <a className="font-semibold text-base text-white">Generate Code</a>
            </div>
          </button>
        </div>
        {/* Below content */}
        <div className="">
          <div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Playlist;
