import React from 'react'

type SearchProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const Search = ({onChange}: SearchProps) => {
  return <input type="text" className="input-search" onChange={onChange} />
}

export {Search}
