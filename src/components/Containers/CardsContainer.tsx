import React from 'react'

type CardsContainerProps = {
  children: React.ReactNode
}

const CardsContainer = ({children}: CardsContainerProps) => {
  return <div className="card-container">{children}</div>
}

export {CardsContainer}
