import { useState } from "react"
import CounterContext from "../contexts/CounterContext"

interface CounterProviderProps {
    children: React.ReactNode
}

const CounterProvider = ({children}: CounterProviderProps) => {
    const [count, setCount] = useState(0)
  return (
    <CounterContext.Provider value={{count, setCount}}>
{children}
    </CounterContext.Provider>
  )
}

export default CounterProvider

