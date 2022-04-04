import React from "react";

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="site-header">
      <h1 className="site-heading">Red Ant Comics</h1>
      <button
        data-testid="favourite-toggle"
        className="favourites-toggle js-favourites-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ></button>
    </header>
  );
};

export default Header;
