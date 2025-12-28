import CounterComponent from "./components/CounterComponent";
import HomePage from "./pages/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CounterProvider from "./providers/CounterProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CounterProvider>
        <HomePage />
       <CounterComponent />
      </CounterProvider>
    </QueryClientProvider>
  );
}

export default App;
