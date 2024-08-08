import "./App.css";
import { CartProvider } from "./components/context/cart";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Home />
      </CartProvider>
    </div>
  );
}

export default App;
