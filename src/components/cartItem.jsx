import { useContext } from "react";
import { customCtx } from "./../context";

function CartItem({ item }) {
  const { addToCart } = useContext(customCtx);
  return (
    <div className="cart-item">
      <ion-icon
        key={item.id}
        name="trash-outline"
        onClick={() =>
          addToCart({ url: item.id, id: item.id, isFavorite: item.isFavorite })
        }
      ></ion-icon>
      <img src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
}

export default CartItem;
