import React, { useContext } from "react";
import { customCtx } from "./../context";
import CartItem from "../components/cartItem";

function Cart() {
  const { cartItems, cartItemLength, handleOrder, order, message } =
    useContext(customCtx);
  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">
        Total:{" "}
        {(cartItemLength * 5.99).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>
      <div className="order-button">
        <button onClick={() => handleOrder()}>
          {order ? "Ordering..." : "Place Order"}
        </button>
      </div>
      <p style={{ textAlign: "center" }}>{message}</p>
    </main>
  );
}

export default Cart;
