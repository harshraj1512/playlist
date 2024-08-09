import React from 'react'
import Sidemenu from '../components/Sidemenu';
import Playlist from '../components/Playlist';
import Navbar from '../components/Navbar';

function Playlists() {
  return (
    <>
    <div className=" min-h-screen flex gap-x-10">
        <Sidemenu/>
        <Playlist/>
    </div>
    </>
  )
}

export default Playlists;