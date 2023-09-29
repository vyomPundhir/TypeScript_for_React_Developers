import { useState } from "react"
import Counter from "./components/Counter"
import Heading from "./components/Heading"
import Section from "./components/Section"
import List from "./components/List"

function App() {
  
  const [count, setCount] = useState<number>(1)

  return (
    <div>
      <Heading title={"Hello"} />
      {/* <Section children={"This is my Section"}/> */}

      <Section title={"Different Title"}>This is my Section</Section>

      {/* here the string "This is my Section" is the children as we know children is something that we don't pass as props. So for the "Section" component the prop "title" is optional but "children" is mandatory. */}
      {/* <Counter/> */}

      <Counter setCount={setCount}>Count is {count}</Counter>

      <List items={["Coffee", "Tacos", "Code"]} render={(item: string) => <span className="gold">{item}</span>} />

    </div>
  )
}

export default App
