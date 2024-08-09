import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { IoMdLink } from "react-icons/io";
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
      const feed = feeds.find(feed => feed.EngagementPostId === firstPostId);
      console.log('Cover Image Feed:', feed); // Debugging line
      return feed ? feed.Thumbnail_URL : 'https://via.placeholder.com/80';
    }
    return 'https://via.placeholder.com/80';
  };
  
  // Function to get the feed details for the playlist
  const getFeedDetails = (postIds) => {
    return postIds.map(postId => {
      return feeds.find(feed => feed.EngagementPostId === postId);
    }).filter(feed => feed); // Remove undefined entries
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
        {/* Below content */}
        <div className="grid grid-cols-3 gap-4 bg-[#27272F] pt-10 h-full rounded-xl">
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
    </>
  );
}

export default Playlist;
