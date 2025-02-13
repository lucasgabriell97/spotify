import React from "react";

import { Routes, Route } from "react-router";

import { Home } from "./pages/Home/Home";
import { Artists } from "./pages/Artists/Artists";
import { Artist } from "./pages/Artist/Artist";
import { Songs } from "./pages/Songs/Songs";
import { Song } from "./pages/Song/Song";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/artist/:id" element={<Artist />} />
      <Route path="/songs" element={<Songs />} />
      <Route path="/song/:id" element={<Song />} />
    </Routes>
  );
};
