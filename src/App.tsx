import React from "react";
import "./css/styles.css";
import { Card } from "./components/Card/Card";
import { Search } from "./components/Search/Search";
import { Footer } from "./components/Footer/Footer";
import { MainContainer } from "./components/Containers/MainContainer";
import { CardsContainer } from "./components/Containers/CardsContainer";

import { nftsList } from "./db/nft";

function App() {
  const [nfts, setNfts] = React.useState(nftsList);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const value = e.target.value;
    const filteredList = nftsList.filter((nft) => {
      return (
        nft.title.toLowerCase()?.includes(value.toLowerCase()) ||
        nft.description.toLowerCase().includes(value.toLowerCase()) ||
        nft.creator.toLowerCase().includes(value.toLowerCase())
      );
    });
    setNfts(filteredList);
  };
  return (
    <MainContainer>
      <Search onChange={handleChange} />
      <CardsContainer>
        {nfts.map((nft,idx) => (
          <Card key={idx} nft={nft} />
        ))}
      </CardsContainer>
      <Footer />
    </MainContainer>
  );
}

export default App;
