import React, { useEffect } from "react";
import { getComics } from "../actions/marvel";
import { useDispatch, useSelector } from "react-redux";
import ComicItem from "./ComicItem";

const Main = () => {
  const dispatch = useDispatch();

  const comics = useSelector((state) => state.marvel.comics);

  useEffect(() => {
    dispatch(getComics());
  }, [dispatch]);

  return (
    <main className="site-content">
      <ul id="comics-list" className="comics-list">
        {comics.map((comic) => (
          <ComicItem key={comic.id} comic={comic} />
        ))}
      </ul>
    </main>
  );
};

export default Main;
