import React from "react";
import "./styles.css";
import { Songs } from "../../assets/database/songs";

import { SongItem } from "../SongItem/SongItem";

export const SongList: React.FC<{ songsArray: Songs[] }> = ({ songsArray }) => {
  const [items, setItems] = React.useState(5);

  return (
    <div className="song-list">
      {songsArray
        .filter((currentValue, index) => index < items)
        .map((currentSongObj, index) => (
          <SongItem {...currentSongObj} index={index} key={index} />
        ))}

      <p className="song-list__see-more" onClick={() => setItems(items + 5)}>
        Ver mais
      </p>
    </div>
  );
};
