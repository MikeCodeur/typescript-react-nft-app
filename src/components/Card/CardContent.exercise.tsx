import React from 'react'
import {CardCreator} from './CardCreator'
import {CardCrypto} from './CardCrypto'

// 🐶 créé le type 'CardContentProps' qui contient le prop 'nft'
const CardContent = () => {
  return (
    <div className="text-container">
      {/* 🐶 utilise le 'name' du nft */}
      <h1 className="title">Equilibrium #3429</h1>
      {/* 🐶 utilise la 'description' du nft */}
      <p className="description">
        Our Equilibrium collection promotes balance and calm.
      </p>
      {/* 🐶 passe le nft en props de CardCrypto et CardCreator  */}
      <CardCrypto />
      <CardCreator />
    </div>
  )
}
export {CardContent}
