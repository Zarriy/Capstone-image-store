import React, { useContext } from "react";
import { customCtx } from "./../context";
import { Link } from "react-router-dom";

function Header() {
  const { cartItemLength } = useContext(customCtx);
  return (
    <header>
      <Link to="/">
        <h2>Pic Some</h2>
      </Link>
      <Link to="/cart">
        <ion-icon name="cart-outline"></ion-icon>
        <strong className="cardNumber">
          {cartItemLength === 0 ? "" : cartItemLength}
        </strong>
      </Link>
    </header>
  );
}

export default Header;
