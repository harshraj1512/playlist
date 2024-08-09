import React from "react";

function Cards({ playlists, handlePlaylistClick, getCoverImage }) {
  return (
    <div className="flex-1">
      <h1 className="text-2xl font-bold mb-4">Playlists</h1>
      <ul className="space-y-4">
        {playlists.map((playlist) => (
          <li
            key={playlist.PlayListId}
            className="bg-gray-100 p-2 rounded-lg shadow-md cursor-pointer hover:bg-gray-200 w-60 h-32"
            onClick={() => handlePlaylistClick(playlist)}
          >
            <div className="relative">
              {playlist.Post_Ids.length > 0 && (
                <img
                  src={getCoverImage(playlist)}
                  alt={playlist.Name}
                  className="w-full h-20 object-cover rounded-md"
                />
              )}
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black via-transparent to-transparent text-white p-2 rounded-b-md">
                <h2 className="text-xl font-semibold">{playlist.Name}</h2>
                <p>{playlist.Post_Ids.length} Videos</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cards;
