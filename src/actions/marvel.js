import { toast } from "react-toastify";
import config from "../config.json";
import {
  SET_ERROR,
  FETCH_COMICS,
  REMOVE_FROM_FAVORITE,
  ADD_TO_FAVORITE,
} from "../types";
const axios = require("axios");

export const getComics = () => async (dispatch) => {
  try {
    const { data: comics } = await axios.get(
      config.apiEndPoint + "limit=10 &&" + config.apiKey
    );

    dispatch({
      type: FETCH_COMICS,
      payload: [...new Set(comics.data.results)],
    });
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: error.response.data,
    });
  }
};

export const removeFavorite = (comicId, title) => (dispatch) => {
  if (comicId) {
    dispatch({
      type: REMOVE_FROM_FAVORITE,
      payload: { comicId },
    });

    toast.success(title + " was removed from favorites!");
  }
};

export const addFavorite =
  ({ comicId, title }) =>
  (dispatch) => {
    if (comicId && title) {
      dispatch({
        type: ADD_TO_FAVORITE,
        payload: {
          comicId,
          title,
        },
      });
      toast.success(title + " was added to favorites!");
    }
  };
