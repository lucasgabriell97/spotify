import React from "react";
import "./styles.css";
import { Link } from "react-router";

type SongItemProps = {
  image: string;
  name: string;
  duration: string;
  _id: number;
  index: number;
};

export const SongItem: React.FC<SongItemProps> = ({
  image,
  name,
  duration,
  _id,
  index,
}) => {
  return (
    <Link to={`/song/${_id}`} className="song-item">
      <div className="song-item__number-album">
        <p>{index + 1}</p>

        <div className="song-item__album">
          <img
            src={image}
            alt={`Imagem da Música ${name}`}
            className="song-item__image"
          />

          <p className="song-item__name">{name}</p>
        </div>
      </div>

      <p>{duration}</p>
    </Link>
  );
};
