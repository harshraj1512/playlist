import React from "react";
import { RxVideo } from "react-icons/rx";
import { PiDotsThreeOutlineBold } from "react-icons/pi";

function Cards({ playlist, handlePlaylistClick, getCoverImage }) {
  return (
    <>
    <div className="pl-4">
    <div
      className="card card-compact w-64 h-40 shadow-xl"
      onClick={() => handlePlaylistClick(playlist)}
    >
        
      <div className="relative ">
        <img
          src={getCoverImage(playlist)}
          alt={playlist.Name}
          className="w-full h-32 object-cover rounded-xl cursor-pointer"
        />
        <div className="absolute top-0 right-0 border border-[#27272F] bg-[#27272F] rounded-md w-6 h-6 flex justify-center items-center "><PiDotsThreeOutlineBold /></div>
        <div className="absolute bottom-5 left-0 w-full bg-opacity-0 text-white pb-4">
          <h2 className="text-sm font-semibold"><span className=" bg-blue-500 w-4 h-4 inline-block rounded-r-lg mr-1"></span>{playlist.Name}</h2>
        </div>
        <div className="flex justify-center items-center gap-2 mt-2 cursor-pointer">
          <span className="text-base text-gray-500">
            <RxVideo />
          </span>
          <p className="text-gray-500 cursor-pointer">{playlist.Post_Ids.length} Videos</p>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Cards;
