import React from 'react'
import './css/styles.css'

import {Card} from './components/Card/Card'
import {Search} from './components/Search/Search'
import {Footer} from './components/Footer/Footer'
import {MainContainer} from './components/Containers/MainContainer'
import {CardsContainer} from './components/Containers/CardsContainer'
// ⛏️ supprime 'nftsList', les données viennent d'API
import {nftsList} from './db/nft'
import {nftType} from './types/types'

function App() {
  // 🐶 créé un state 'nftsApi' qui contiendra les données venant de l'api
  const [nfts, setNfts] = React.useState<nftType[]>(nftsList)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    const value = e.target.value
    const filteredList = nftsList.filter(nft => {
      return (
        nft.title.toLowerCase()?.includes(value.toLowerCase()) ||
        nft.description.toLowerCase().includes(value.toLowerCase()) ||
        nft.creator.toLowerCase().includes(value.toLowerCase())
      )
    })
    setNfts(filteredList)
  }
  // 🐶 utilise le Hook useEffect pour
  // - faire un fetch avec la methode GET
  // - ressource : https://636b20b6c07d8f936dae7fe4.mockapi.io/api/nft/all
  // - met les data dans 'nftsApi'
  return (
    <MainContainer>
      <Search onChange={handleChange} />
      <CardsContainer>
        {nfts.map((nft, idx) => (
          <Card key={idx} nft={nft} />
        ))}
      </CardsContainer>
      <Footer />
    </MainContainer>
  )
}

export {App}
