import React from 'react'
import './css/styles.css'

import {Card} from './components/Card/Card'
import {Search} from './components/Search/Search.exercise'
import {Footer} from './components/Footer/Footer'
import {MainContainer} from './components/Containers/MainContainer'
import {CardsContainer} from './components/Containers/CardsContainer'
import {nftsList} from './db/nft'
// 🐶 importe le type 'nftType' nous allons typer les states et props avec
// 🤖 import {nftType} from './types/types'

function App() {
  // comme la liste de nft va etre filtrer et mise à jour dans l'écran
  // nous devons passe par un state contenant nos nft
  // 🐶 créé un state 'nfts' de nftType[] (un array de nft)

  // 🐶 créé une fonction fléchée 'handleChange', elle doit avoir la meme signature
  // que celle de 'Search'
  // reprend la meme implementation que dans le projet vanilla
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
