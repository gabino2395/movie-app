import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            MovieAPP
          </NavLink>
         
          {/* <Buscador/> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
