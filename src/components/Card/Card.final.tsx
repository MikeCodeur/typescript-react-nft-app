import React from 'react'
import {nftType} from '../../types/types'
import {CardContent} from './CardContent.final'
import {CardImage} from './CardImage.final'

type CardProps = {
  nft: nftType
}
const Card = ({nft}: CardProps) => {
  return (
    <section className="main-card">
      <CardImage imgSrc={nft.img} />
      <CardContent nft={nft} />
    </section>
  )
}
export {Card}
