// import { useState } from "react"

import { ReactNode } from "react"

type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>,
  children: ReactNode,
}


const Counter = ({ setCount, children}: CounterProps) => {

  // const [count, setCount] = useState<number>(1)

  return (
    <div>
      {/* <h1>Count is {count} </h1>
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
      <button onClick={() => setCount(prev => prev - 1)}>-</button> */}

      <h1>{children}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
      <button onClick={() => setCount(prev => prev - 1)}>-</button> 


    </div>
  )
}

export default Counter;