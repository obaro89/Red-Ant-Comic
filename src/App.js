import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import Favorites from "./components/Favorites";
import Header from "./components/Header";
import Main from "./components/Main";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  //create a state for the favorite panel
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { error, errorMessage } = useSelector((state) => state.marvel);
  const favorites = useSelector((state) => state.marvel.favorites);

  if (error) {
    toast.error(errorMessage);
  }

  let favPanel = isMenuOpen ? "favourites-panel open" : "favourites-panel";

  return (
    <Fragment>
      <ToastContainer />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Main />
      <Favorites
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        favPanel={favPanel}
        favorites={favorites}
      />
    </Fragment>
  );
}

export default App;
