import React, { useContext } from "react";
import Image from "../components/image";
import { customCtx } from "./../context";
import { getClass } from "./../utilis/index";

function Photos() {
  const { photos } = useContext(customCtx);
  console.log(photos);

  return (
    <main className="photos">
      {photos.map((imgData, i) => {
        return (
          <Image
            src={imgData.url}
            className={getClass(i)}
            key={imgData.id}
            id={imgData.id}
            isFavorite={imgData.isFavorite}
          />
        );
      })}
    </main>
  );
}

export default Photos;
