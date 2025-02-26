import React from "react";
import "./styles.css";
import { Link, useLocation } from "react-router";

import { SingleItem } from "../SingleItem/SingleItem";

type Artist = {
  id: number;
  image: string;
  name: string;
  banner: string;
};

type Song = {
  image: string;
  name: string;
  duration: string;
  artist: string;
  audio: string;
  id: number;
}

type ItemListProps = {
  title: string;
  items: number;
  itemsArray: (Artist | Song)[];
  path: string;
  idPath: string;
};

export const ItemList: React.FC<ItemListProps> = ({
  title,
  items,
  itemsArray,
  path,
  idPath,
}) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const finalItems = isHome ? items : Infinity;

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>
        {isHome && (
          <Link to={path} className="item-list__link">
            Mostrar tudo
          </Link>
        )}
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((_, index) => index < finalItems)
          .map((currentObj) => (
            <SingleItem key={currentObj.id} idPath={idPath} {...currentObj} />
          ))}
      </div>
    </div>
  );
};
