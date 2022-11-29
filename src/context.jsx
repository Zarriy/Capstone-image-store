import { React, createContext, useState, useEffect } from "react";

const customCtx = createContext();

function CtxProvider(props) {
  const [photos, setPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [order, setOrder] = useState(false);
  const [message, setMessage] = useState("");
  let cartItemLength = cartItems.length;

  function handleOrder() {
    if (cartItemLength > 0) {
      setOrder(true);
      setTimeout(() => {
        setMessage("Order has been placed, Thank you");
        setCartItems([]);
        setOrder(false);
      }, 2000);
    } else {
      setMessage("Cart is empty");
    }
    setTimeout(() => setMessage(""), 4000);
  }

  useEffect(() => {
    const Data = async () => {
      const fetching = await fetch(
        "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
      );
      const resp = await fetching.json();
      return resp;
    };
    Data().then((imgs) => setPhotos(imgs));
  }, []);

  const toggleFavourtie = (id) => {
    setPhotos((prev) => {
      return prev.map((photo) => {
        return photo.id === id
          ? { ...photo, isFavorite: !photo.isFavorite }
          : { ...photo };
      });
    });
  };

  const addToCart = (data) => {
    const find = cartItems.some((item) => item.id === data.id);
    if (find) {
      setCartItems((prev) => prev.filter((item) => item.id !== data.id));
    } else {
      setCartItems((prev) => [...prev, data]);
    }
  };

  return (
    <customCtx.Provider
      value={{
        photos,
        toggleFavourtie,
        addToCart,
        cartItems,
        cartItemLength,
        handleOrder,
        order,
        message,
      }}
    >
      {props.children}
    </customCtx.Provider>
  );
}

export { CtxProvider, customCtx };

// # Challenge

// Get the JSON data with the photos information from the API and save it to context state

// 1. As soon as the ContextProvider component renders, get the JSON data from this url:
// https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json

// 2. Save the array of data that comes back to state.

// Review data fetching in React using `fetch`:
// https://scrimba.com/p/p7P5Hd/c79Jask
