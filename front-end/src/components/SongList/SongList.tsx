import React from "react";
import "./styles.css";

type Song = {
  image: string;
  name: string;
  duration: string;
  artist: string;
  audio: string;
  id: number;
}

import { SongItem } from "../SongItem/SongItem";

export const SongList: React.FC<{ songsArray: Song[] }> = ({ songsArray }) => {
  const [items, setItems] = React.useState(5);

  return (
    <div className="song-list">
      {songsArray
        .filter((_, index) => index < items)
        .map((currentSongObj, index) => (
          <SongItem {...currentSongObj} index={index} key={index} />
        ))}

      <p className="song-list__see-more" onClick={() => setItems(items + 5)}>
        Ver mais
      </p>
    </div>
  );
};
