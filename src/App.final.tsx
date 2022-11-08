import React from 'react'
import './css/styles.css'

import {Card} from './components/Card/Card'
import {Search} from './components/Search/Search'
import {Footer} from './components/Footer/Footer'
import {MainContainer} from './components/Containers/MainContainer'
import {CardsContainer} from './components/Containers/CardsContainer'
import {nftsList} from './db/nft'
import {nftType} from './types/types'
function App() {
  const [nfts, setNfts] = React.useState<nftType[]>(nftsList)
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
