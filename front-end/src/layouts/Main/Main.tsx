import React from "react";
import "./styles.css";

import { ItemList } from "../../components/ItemList/ItemList";

import { artistArray } from "../../assets/database/artists.ts";
import { songsArray } from "../../assets/database/songs.ts";

type Song = {
  image: string;
  name: string;
  duration: string;
  artist: string;
  audio: string;
  id: number;
}

export const Main: React.FC<{ type?: string }> = ({ type }) => {
  return (
    <main className="main">
      {type === "artists" || type === undefined ? (
        <ItemList
          title="Artistas"
          items={10}
          itemsArray={artistArray}
          path="/artists"
          idPath="/artist"
        />
      ) : (
        <></>
      )}

      {type === "songs" || type === undefined ? (
        <ItemList
          title="Músicas"
          items={20}
          itemsArray={songsArray as Song[]}
          path="/songs"
          idPath="/song"
        />
      ) : (
        <></>
      )}
    </main>
  );
};
