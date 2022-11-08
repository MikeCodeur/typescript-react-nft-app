import React from 'react'

type CardsContainerProps = {
  children: React.ReactNode
}

const CardsContainer: React.FC<CardsContainerProps> = ({children}) => {
  return <div className="card-container">{children}</div>
}

export {CardsContainer}
