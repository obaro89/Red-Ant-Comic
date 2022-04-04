import React from "react";
import FavoriteList from "./FavoriteList";

const Favorites = ({ favPanel, setIsMenuOpen, isMenuOpen, favorites }) => {
  //favorites is also available in the store
  return (
    <div
      data-testid="favourites-panel"
      id="favourites-panel"
      className={favPanel}
    >
      <div className="favourites-header">
        <h2>Favourites</h2>
        <button
          className="close js-close"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></button>
      </div>
      <div className="favourites-content">
        <ul className="favourites-list" data-testid="favourites-list">
          {favorites.length == 0 && <li>Your favorite list is empty</li>}
          {favorites.map((favorite) => (
            <FavoriteList key={favorite.comicId} favorite={favorite} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Favorites;
