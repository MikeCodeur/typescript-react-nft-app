import React from 'react'

// 🐶 créé le type 'CardCryptoProps' qui contient le prop 'nft'
const CardCrypto = () => {
  // 🐶 remplace les informations en dur par les info du nft
  return (
    <div className="eth-info">
      <div className="info">
        <img src="images/icon-ethereum.svg" alt="ETH" className="icon" />
        <span className="eth">0.065 ETH</span>
      </div>
      <div className="info">
        <img src="images/icon-clock.svg" alt="clock" className="icon" />
        <span className="expire">3 days left</span>
      </div>
    </div>
  )
}
export {CardCrypto}
