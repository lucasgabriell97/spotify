import React from "react";
import "./styles.css";

import { ItemList } from "../../components/ItemList/ItemList";

import { artistArray } from "../../assets/database/artists";
import { songsArray } from "../../assets/database/songs";

export const Main: React.FC<{ type: string }> = ({ type }) => {
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
          itemsArray={songsArray}
          path="/songs"
          idPath="/song"
        />
      ) : (
        <></>
      )}
    </main>
  );
};
