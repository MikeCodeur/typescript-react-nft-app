import React from 'react'

// 🐶 créé un type 'SearchProps' contenant le prop 'onChange'
// 'onChange' est une fonction
// - qui ne retourne rien
// - qui prend un parametre 'e' de type ChangeEvent<T>
// Le type generic T dependra de quel element HTML viendra le change event
// dans notre cas il s'agit d'un input element (il exite un type TS pour cela)

// 🐶 déclare le prop dans 'Search'
const Search = () => {
  return <input type="text" className="input-search" />
}
// la suite dans App
export {Search}
