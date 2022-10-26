import React from "react";
import { nftType } from "../../types/types";
import { CardCreator } from "./CardCreator";
import { CardCrypto } from "./CardCrypto";

type CardContentProps = {
  nft: nftType;
};
export const CardContent = ({nft}:CardContentProps) => {
  const {title,description} = nft
  return (
    <div className="text-container">
      <h1 className="title">{title}</h1>
      <p className="description">
        {description}
      </p>
      <CardCrypto nft={nft} />
      <CardCreator nft={nft} />
    </div>
  );
};
