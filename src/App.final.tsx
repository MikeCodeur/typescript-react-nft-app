import React from 'react'
import './css/styles.css'

import {Card} from './components/Card/Card'
import {Search} from './components/Search/Search'
import {Footer} from './components/Footer/Footer'
import {MainContainer} from './components/Containers/MainContainer'
import {CardsContainer} from './components/Containers/CardsContainer'
import {nftType} from './types/types'

function App() {
  const [nftsApi, setNftsApi] = React.useState<nftType[]>([])
  const [nfts, setNfts] = React.useState<nftType[]>([])
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    const value = e.target.value
    const filteredList = nftsApi.filter(nft => {
      return (
        nft.title.toLowerCase()?.includes(value.toLowerCase()) ||
        nft.description.toLowerCase().includes(value.toLowerCase()) ||
        nft.creator.toLowerCase().includes(value.toLowerCase())
      )
    })
    setNfts(filteredList)
  }

  React.useEffect(() => {
    const api = async () => {
      const data = await fetch(
        'https://636b20b6c07d8f936dae7fe4.mockapi.io/api/nft/all',
        {
          method: 'GET',
        },
      )
      const jsonData = await data.json()
      console.log(jsonData)
      setNftsApi(jsonData.data)
      setNfts(jsonData.data)
    }
    api()
    return () => {}
  }, [])

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
