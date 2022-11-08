import React from 'react'

// 🐶 Créé le type de props 'CardsContainerProps' qui wrappe une 'Card' de tel maniere que l'on puisse
// utiliser CardsContainer comme cela :
// <CardsContainer>
//   <Card />
// </CardsContainer>

// 🐶 Comme nous utilisons un prop 'children' son type est particulier
// 🤖 React.ReactNode

function CardsContainer() {
  // 🤖  <div className="card-container">
  return <div></div>
}

export {CardsContainer}
