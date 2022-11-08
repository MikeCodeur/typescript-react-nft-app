import React from 'react'

// 🐶 Créé le type de props 'MainContainerProps' de tel maniere que l'on puisse
// utiliser MainContainer comme cela :
// <MainContainer>
//   <Search />
//   <CardsContainer>
//     <Card />
//   </CardsContainer>
//   <Footer />
// </MainContainer>

// 🐶 Comme nous utilisons un prop 'children' son type est particulier
// 🤖 React.ReactNode

function MainContainer() {
  //<main className="container">
  return <div></div>
}

export {MainContainer}
