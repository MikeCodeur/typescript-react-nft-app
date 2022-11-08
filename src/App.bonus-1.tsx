import React from 'react'
import './css/styles.css'

import {Card} from './components/Card/Card.final'
import {Search} from './components/Search/Search'
import {Footer} from './components/Footer/Footer'
import {MainContainer} from './components/Containers/MainContainer'
import {CardsContainer} from './components/Containers/CardsContainer'
import {nftsList} from './db/nft'
function App() {
  return (
    <MainContainer>
      <Search />
      <CardsContainer>
        {nftsList.map((nft, idx) => (
          <Card key={idx} nft={nft} />
        ))}
      </CardsContainer>
      <Footer />
    </MainContainer>
  )
}

export {App}
