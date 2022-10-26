import React from "react";
import { nftType } from "../../types/types";
import { CardContent } from "./CardContent";
import {CardImage} from "./CardImage"

type CardProps = {
  nft: nftType;
};
export const Card = ({ nft }: CardProps) => {
  return (
    <section className="main-card">
      <CardImage imgSrc={nft.img} />
      <CardContent nft={nft}/>
    </section>
  );
};
