import React from 'react'

// 🐶 créé le type 'CardImageProps' qui contient le prop 'nft'
const CardImage = () => {
  // 🐶 remplace les informations en dur par les info du nft
  return (
    <div className="image-container">
      <img
        src="images/image-equilibrium.jpg"
        alt="nft"
        className="main-image"
      />
      <div className="overlay"></div>
      <img src="images/icon-view.svg" alt="view icon" className="view" />
    </div>
  )
}
export {CardImage}
