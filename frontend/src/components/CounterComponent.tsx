import { useCounterContext } from "../contexts/CounterContext"


const CounterComponent = () => {
const {count, increment, decrement, reset} = useCounterContext()
  return (
    <div>CounterComponent
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterComponent