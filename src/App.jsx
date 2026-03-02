import React, { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Header
        cartCount={cartCount}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <ProductList
        setCartCount={setCartCount}
        searchTerm={searchTerm}
      />
    </div>
  );
}

export default App;