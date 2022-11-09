import React from 'react'
import './css/styles.css'

import {Card} from './components/Card/Card'
import {Search} from './components/Search/Search'
import {Footer} from './components/Footer/Footer'
import {MainContainer} from './components/Containers/MainContainer'
import {CardsContainer} from './components/Containers/CardsContainer'
import {nftType} from './types/types'

type JSONResponse = {
  data?: Array<Omit<nftType, 'fetchedAt' | 'createdAt'>>
  elements?: number
  errors?: Array<{message: string}>
}

function App() {
  const [nftsApi, setNftsApi] = React.useState<nftType[] | undefined>([])
  const [nfts, setNfts] = React.useState<nftType[] | undefined>([])
  const [errors, setErrors] = React.useState<
    Array<{message: string}> | undefined
  >([])
  const [elements, setElements] = React.useState<number>()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    const value = e.target.value
    const filteredList = nftsApi?.filter(nft => {
      return (
        nft.title.toLowerCase()?.includes(value.toLowerCase()) ||
        nft.description.toLowerCase().includes(value.toLowerCase()) ||
        nft.creator.toLowerCase().includes(value.toLowerCase())
      )
    })
    setNfts(filteredList)
    setElements(filteredList?.length)
  }

  React.useEffect(() => {
    const api = async () => {
      const resp = await fetch(
        'https://636b20b6c07d8f936dae7fe4.mockapi.io/api/nft/all',
        {
          method: 'GET',
        },
      )
      if (resp.ok) {
        const {data, errors, elements}: JSONResponse = await resp.json()
        console.log(data)
        setNftsApi(data)
        setNfts(data)
        setErrors(errors)
        setElements(elements)
      } else {
        setErrors([{message: 'API en erreur'}])
        setNftsApi([])
        setNfts([])
        setElements(0)
      }
    }
    api()
    return () => {}
  }, [])

  return (
    <MainContainer>
      <Search onChange={handleChange} />
      {elements ?? -1 > 0 ? (
        <div role={'alert'} className="elements">
          il y a {elements} element(s)
        </div>
      ) : null}
      {errors?.length ?? -1 > 0 ? (
        <div role={'alert'} className="alert">
          il y a {errors?.length} erreur(s) : {errors?.[0].message}
        </div>
      ) : null}
      <CardsContainer>
        {nfts?.map((nft, idx) => (
          <Card key={idx} nft={nft} />
        ))}
      </CardsContainer>
      <Footer />
    </MainContainer>
  )
}

export {App}
