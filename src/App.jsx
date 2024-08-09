import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Sidemenu from './components/Sidemenu';
import Playlist from './components/Playlist';
import Playlists from './playlist/Playlists';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Sidemenu/>} />
        <Route path="/playlist" element={<Playlists/>} />
      </Routes>
    </div>
  )
}

export default App;