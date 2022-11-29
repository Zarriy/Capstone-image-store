import { useState, useContext } from "react";
import { customCtx } from "./../context";

function Image({ className, src, id, isFavorite }) {
  const [hover, setHover] = useState(false);
  const { toggleFavourtie } = useContext(customCtx);

  return (
    <div
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`${className} image-container`}
    >
      {hover && (
        <ion-icon
          onClick={() => toggleFavourtie(id)}
          name={`heart-${isFavorite ? "circle-outline" : "outline"}`}
        ></ion-icon>
      )}
      {hover && <ion-icon name="add-circle-outline"></ion-icon>}
      <img src={src} className="image-grid" />
    </div>
  );
}

export default Image;
// # Challenge

// On the Image component, track the hover state

// 1. Create state boolean for "hovered"
// 2. When the mouse enters the Image's div, set "hovered" to true
// 3. When the mouse leaves the Image's div, set "hovered" to false
// 4. Log "hovered" to the console so you know it's changing successfully.
