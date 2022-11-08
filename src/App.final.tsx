import React from 'react'
import './css/styles.css'

import {Card} from './components/Card/Card'
import {Search} from './components/Search/Search'
import {Footer} from './components/Footer/Footer'
import {MainContainer} from './components/Containers/MainContainer'
import {CardsContainer} from './components/Containers/CardsContainer'

function App() {
  return (
    //@ts-ignore // TS ignore seulement pour l'exercice. error de compile
    <MainContainer>
      <Search />
      {/* @ts-ignore // TS ignore seulement pour l'exercice. error de compile */}
      <CardsContainer>
        <Card />
      </CardsContainer>
      <Footer />
    </MainContainer>
  )
}

export {App}
