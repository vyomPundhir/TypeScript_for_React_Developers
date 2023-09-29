// Here we looking at GENERICS(something that we often do in react is to render a list of items )

import { ReactNode } from "react"

interface ListProps<T> {
  items: T[],
  render: (item: T) => ReactNode
}

// const List = <T extends {}>({ items, render }: ListProps<T>)
const List = <T,>({ items, render }: ListProps<T>) => {
  return (
    <ul>
      {items.map((item,i)=>(
        <li key={i}>
          {render(item)}
        </li>
      ))}
    </ul>
  )
}

export default List