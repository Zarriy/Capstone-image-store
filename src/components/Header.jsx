import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">
        <h2>Pic Some</h2>
      </Link>
      <Link to="/cart">
        <ion-icon name="cart-outline"></ion-icon>
      </Link>
    </header>
  );
}

export default Header;
