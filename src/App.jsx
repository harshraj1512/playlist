import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Playlists from './playlist/Playlists';
import Home from './Home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/playlist" element={<Playlists/>} />
      </Routes>
    </div>
  )
}

export default App;