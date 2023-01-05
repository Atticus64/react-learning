import { useState } from "react"
import '../App.css'
import MyButton from "./Button"

export default function Counter({ customCount, title }) {
  const defaulCount = customCount ?? 0
  const [count, setCount] = useState(defaulCount)

  const increaseCount = () => {
    setCount(count + 1)
  }

  const decreaseCount = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h2>{ title ?? 'Counter'  }</h2>
      <h4>The current count is { count }</h4>
      <MyButton myFunc={increaseCount} message="+1" />
      <MyButton myFunc={decreaseCount} message="-1" />
    </>
  )
}



