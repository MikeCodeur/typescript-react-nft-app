import React from 'react'

type MainContainerProps = {
  children: React.ReactNode
}

const MainContainer = ({children}: MainContainerProps) => {
  return <main className="container">{children}</main>
}
export {MainContainer}
