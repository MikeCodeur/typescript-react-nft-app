import React from 'react'

// 🐶 créé le type 'CardCreatorProps' qui contient le prop 'nft'
const CardCreator = () => {
  // 🐶 remplace les informations en dur par les info du nft
  return (
    <div className="creator-info">
      <img
        src="images/image-avatar.png"
        alt="Jules Wyvern"
        className="avatar"
      />
      <p className="creator-text">
        Creation of <span className="creator-name">Jules Wyvern</span>
      </p>
    </div>
  )
}
export {CardCreator}
