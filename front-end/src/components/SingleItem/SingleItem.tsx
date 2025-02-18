import React from "react";
import "./styles.css";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

type SingleItemProps = {
  id: number;
  image: string;
  name?: string;
  banner?: string;
  duration?: string;
  artist?: string;
  idPath: string;
};

export const SingleItem: React.FC<SingleItemProps> = ({
  id,
  image,
  name,
  artist,
  idPath,
}) => {
  return (
    <Link to={`${idPath}/${id}`} className="single-item">
      <div className="single-item__div-image-button">
        <div className="single-item__div-image">
          <img
            className="single-item__image"
            src={image}
            alt={`Imagem do Artista ${name}`}
          />
        </div>

        <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} />
      </div>

      <div className="single-item__texts">
        <div className="single-item__2lines">
          <p className="single-item__title">{name}</p>
        </div>

        <p className="single-item__type">{artist ?? "Artista"}</p>
      </div>
    </Link>
  );
};
