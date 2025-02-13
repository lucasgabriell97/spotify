import React from "react";
import "./styles.css";

import { ItemList } from "../../components/ItemList/ItemList";

import { artistArray } from "../../assets/database/artists";
import { songsArray } from "../../assets/database/songs";

export const Main: React.FC = () => {
  return (
    <main className="main">
      <ItemList
        title="Artistas"
        items={5}
        itemsArray={artistArray}
        path="/artists"
        idPath="/artist"
      />
      <ItemList
        title="Músicas"
        items={10}
        itemsArray={songsArray}
        path="/songs"
        idPath="/song"
      />
    </main>
  );
};
