import { useState, useContext } from "react";
import { customCtx } from "./../context";
import PropTypes from "prop-types";

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
Image.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  src: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool,
};

export default Image;
