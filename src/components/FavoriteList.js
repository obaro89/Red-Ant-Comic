import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_FROM_FAVORITE } from "../types";

const FavoriteList = ({ favorite }) => {
  const dispatch = useDispatch();
  return (
    <li key={favorite.comicId} data-testid="fav-list">
      {favorite.title}
      <button
        data-testid="removeBtn"
        className="remove js-remove"
        onClick={() =>
          dispatch({
            type: REMOVE_FROM_FAVORITE,
            payload: {
              comicId: favorite.comicId,
            },
          })
        }
      ></button>
    </li>
  );
};

export default FavoriteList;
