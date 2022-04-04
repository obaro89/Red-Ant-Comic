import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../actions/marvel";

const ComicItem = ({ comic }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.marvel.favorites);

  const isInFavorites = favorites.find(
    (favorite) => favorite.comicId === comic.id
  );

  const imgPath =
    comic.thumbnail.path + "/portrait_uncanny." + comic.thumbnail.extension;

  return (
    <li className="comic-item">
      <div className="comic-card">
        <img src={imgPath} alt="" />
        <h2>{comic.title}</h2>
        {isInFavorites ? (
          <button
            className="button js-add"
            onClick={() => dispatch(removeFavorite(comic.id, comic.title))}
          >
            Remove from favourites
          </button>
        ) : (
          <button
            data-testid="add-btn"
            name="add"
            className="button js-add"
            onClick={() =>
              dispatch(addFavorite({ comicId: comic.id, title: comic.title }))
            }
          >
            Add to favourites
          </button>
        )}
      </div>
    </li>
  );
};

export default ComicItem;
