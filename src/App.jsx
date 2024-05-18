import { products as initialProducts } from "./mocks/products.json"
import Products from "./components/products/Products"
import Header from "./components/header/Header";
import { useFilters } from "./hooks/useFilters";
import Cart from "./components/cart/Cart";
import { CartProvider } from "./context/cart";

const App = () => {
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(initialProducts);

  return (
    <CartProvider>
      <Cart />
      <Header />
      <Products products={filteredProducts} />
    </CartProvider>
  )
}

export default App
