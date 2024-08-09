import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { IoMdLink } from "react-icons/io";
import axios from "axios";

function Playlist() {
  const [playlists, setPlaylists] = useState([]);
  useEffect(() => {
    const getplay = async () => {
      try {
        const res = await axios.post(
          "https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getAllPlayList",
          {
            Content_Type: 2
          },
          {
            headers: {
              "X-Api-Key": "MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr",
              "X-Tenant-Key": "TYKE070323"
            }
          }
        );
        console.log("playlist ready:", res.data);
        setPlaylists(res.data);
      } catch (error) {
        console.error("Error fetching playlist:", error);
      }
    };

    getplay();
  }, []);

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
        <div className="grid grid-cols-1 md:grid-cols-4">
          hellp
        {/* {
            book.map((item) => (
              <Cards key={item.id} item={item} />
            ))
        } */}
        </div>
      </div>
    </>
  );
}

export default Playlist;
