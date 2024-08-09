import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { IoMdLink } from "react-icons/io";
import { GrUpdate } from "react-icons/gr";
import axios from "axios";
import Cards from "./Cards";

function Playlist() {
  const [playlists, setPlaylists] = useState([]);
  const [feeds, setFeeds] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  useEffect(() => {
    const getplay = async () => {
      try {
        const res = await axios.post(
          "https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getAllPlayList",
          {
            Content_Type: 2,
          },
          {
            headers: {
              "X-Api-Key": "MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr",
              "X-Tenant-Key": "TYKE070323",
            },
          }
        );
        console.log("playlist ready:", res.data);
        setPlaylists(res.data.data || []);
      } catch (error) {
        console.error("Error fetching playlist:", error);
      }
    };

    getplay();
  }, []);

  //feed
  useEffect(() => {
    const getfeed = async () => {
      try {
        const res = await axios.post(
          "https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getfeeds_v1",
          {
            Index: 1,
            ContentType: [2],
            IsTagged: false,
            URL: "",
          },
          {
            headers: {
              "X-Api-Key": "MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr",
              "X-Tenant-Key": "TYKE070323",
            },
          }
        );
        console.log("feed ready:", res.data);
        setFeeds(res.data.data.Feeds || []);
      } catch (error) {
        console.error("Error fetching playlist:", error);
      }
    };

    getfeed();
  }, []);
  const handlePlaylistClick = (playlist) => {
    setSelectedPlaylist(playlist);
  };
  // the cover image
  const getCoverImage = (playlist) => {
    if (playlist.Post_Ids.length > 0) {
      const firstPostId = playlist.Post_Ids[0];
      const feed = feeds.find((feed) => feed.EngagementPostId === firstPostId);
      console.log("Cover Image:", feed); // Debugging line
      return feed ? feed.Thumbnail_URL : "https://via.placeholder.com/80";
    }
    return "https://via.placeholder.com/80";
  };

  // Function to get the feed details for the playlist
  const getFeedDetails = (postIds) => {
    return postIds
      .map((postId) => {
        return feeds.find((feed) => feed.EngagementPostId === postId);
      })
      .filter((feed) => feed); // Remove undefined entries
  };

  const formatDuration = (durationInSeconds) => {
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    const seconds = Math.floor(durationInSeconds % 60);

    return [
      hours.toString().padStart(2, "0"),
      minutes.toString().padStart(2, "0"),
      seconds.toString().padStart(2, "0"),
    ].join(":");
  };
  return (
    <>
      <div className="flex flex-col min-w-fit container gap-y-4 pr-9">
        <div>
          <Navbar />
        </div>
        <div className="px-5 flex justify-between ">
          <a className="font-semibold text-lg text-white">Product Playlist</a>
          <button className="btn border-solid border-2 bg-sky-500">
            <div className="indicator gap-2 items-center">
              <span className=" text-xl rounded-md text-white">
                <IoMdLink />
              </span>
              <a className="font-semibold text-base text-white">
                Generate Code
              </a>
            </div>
          </button>
        </div>
        {/* Main Content with Cards and Playlist Details */}
        <div className="flex gap-x-4 h-full rounded-xl">
          <div className="bg-[#27272F] ">
            <div className="grid grid-cols-3 gap-4">
              {playlists.map((playlist) => (
                <Cards
                  key={playlist.PlayListId}
                  playlist={playlist}
                  handlePlaylistClick={handlePlaylistClick}
                  getCoverImage={getCoverImage}
                />
              ))}
            </div>
          </div>

          {/* Playlist Details Section */}
          {selectedPlaylist && (
            <div className="bg-[#27272F] p-1 shadow-lg rounded-lg">
              <a className="text-base font-medium text-white pl-2">
                Thumbnail Title
              </a>
              <input
                type="text"
                placeholder="Get Sporty in Style"
                className="input input-bordered flex my-3 mx-2 w-64"
              />
              <div className="flex flex-col pl-2 gap-3 my-3">
                <a className="font-medium text-base text-white">Video Status</a>
                <div className="flex flex-row gap-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="radio-status"
                      className="radio checked:bg-sky-500"
                      defaultChecked
                    />
                    <span className="ml-2 text-white">Active</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="radio-status"
                      className="radio checked:bg-sky-500"
                    />
                    <span className="ml-2 text-white">Inactive</span>
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <a className="text-lg font-semibold text-white">Product List</a>
              </div>
              <div className="flex flex-col gap-4 overflow-auto">
                {getFeedDetails(selectedPlaylist.Post_Ids).map((feed) => (
                  <div
                    key={feed.EngagementPostId}
                    className="flex p-4 shadow-md border-2 border-gray-700 rounded-lg mx-4"
                  >
                    <img
                      src={
                        feed.Thumbnail_URL ||
                        "https://blog.hootsuite.com/wp-content/uploads/2023/12/Social-media-image-sizes.png"
                      }
                      alt={feed.Thumbnail_Title}
                      className="w-12 h-12"
                    />
                    <div className="pl-3">
                      <a className="text-sm font-semibold mt-2">
                        {feed.Thumbnail_Title}
                      </a>
                      <p className="text-xs font-medium text-white bg-gray-500 w-16 rounded-lg pl-2">
                        {formatDuration(feed.Video_duration)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-2 flex justify-center items-center border-t-2 border-gray-700 ">
                <button className="btn bg-sky-500 my-2">
                  <div className="indicator gap-2 items-center">
                    <span className=" text-sm rounded-md text-white">
                      <GrUpdate />
                    </span>
                    <a className="font-semibold text-sm text-white">
                      Update Playlist
                    </a>
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Playlist;
