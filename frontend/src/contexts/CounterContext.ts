import { createContext, useContext } from "react";

export type CounterContextType = {
  count: number;
  setCount: (count: number) => void;
};

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const useCounterContext = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounterContext must be used within a CounterProvider");
  }
  return context;
};

export default CounterContext;
