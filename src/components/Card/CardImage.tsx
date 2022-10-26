import React from "react";

type CardImageProps = {
  imgSrc: string;
};
export const CardImage = ({imgSrc}:CardImageProps) => {
  return (
    <div className="image-container">
      <img
        src={imgSrc}
        alt="nft"
        className="main-image"
      />
      <div className="overlay"></div>
      <img src="images/icon-view.svg" alt="view icon" className="view" />
    </div>
  );
};
