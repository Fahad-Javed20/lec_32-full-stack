import { useCounterContext } from "../contexts/CounterContext"


const CounterComponent = () => {
const {count, increment, decrement, reset} = useCounterContext()
  return (
    <div className="flex flex-col items-center gap-6">
      <p className="bg-gray-200 px-4 py-1">{count}</p>
      <div className="flex gap-2">

      <button className="bg-blue-500 px-4 py-1 rounded-xl  " onClick={increment}>Increment</button>
      <button className="bg-red-500 px-4 py-1 rounded-xl " onClick={decrement}>Decrement</button>
      <button className="bg-green-500 px-4 py-1 rounded-xl " onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default CounterComponent