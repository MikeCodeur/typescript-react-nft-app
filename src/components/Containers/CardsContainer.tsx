import React from "react";

type CardsContainerProps = {
  children: React.ReactNode;
};
export const CardsContainer = ({ children }: CardsContainerProps) => {
  return <div className="card-container">{children}</div>;
};
