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
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
};

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
          .filter((currentValue, index) => index < finalItems)
          .map((currentObj) =>
            "image" in currentObj ? (
              <SingleItem key={currentObj.id} idPath={idPath} {...currentObj} />
            ) : (
              <SingleItem
                key={currentObj.id}
                idPath={idPath}
                {...currentObj}
                image="URL_PADRAO"
              />
            )
          )}
      </div>
    </div>
  );
};
