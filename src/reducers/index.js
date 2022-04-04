import {
  SET_ERROR,
  FETCH_COMICS,
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
} from "../types";

//initialize the state of the app
const initialState = {
  comics: [],
  favorites: [],
  isLoading: true,
  error: false,
  errorMessage: "",
};

export const comicReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case FETCH_COMICS:
      return {
        ...state,
        comics: payload,
        isLoading: false,
        error: false,
        errorMessage: "",
      };

    case SET_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: payload,
      };

    case ADD_TO_FAVORITE:
      return {
        ...state,
        favorites: [
          ...state.favorites,
          {
            comicId: payload.comicId,
            title: payload.title,
          },
        ],
      };

    case REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite.comicId !== payload.comicId
        ),
      };

    default:
      return state;
  }
};
