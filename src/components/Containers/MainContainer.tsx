import React from "react";

type MainContainerProps = {
  children : React.ReactNode
}
export const MainContainer = ({children}:MainContainerProps) => {
  return (
    <main className="container">
     {children}
    </main>
  );
};