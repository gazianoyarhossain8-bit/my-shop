import React, { useEffect, useState } from "react";
import axios from "axios";

function productList({ setCartCount, searchTerm }) {
  const [products, setProducts] = useState([]);

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:7000/api/products");
        setProducts(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  //  Search Filter
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      {filteredProducts.length === 0 ? (
        <p>No products found</p>
      ) : (
        filteredProducts.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg p-4 shadow hover:shadow-xl transition"
          >
            {/* Image */}
            <img
              src={`http://localhost:7000/${product.image}`}
              alt={product.name}
              className="h-40 w-full object-cover mb-4 rounded"
            />

            <h2 className="font-semibold text-lg">{product.name}</h2>
            <p className="text-pink-600 font-bold">₹{product.price}</p>

            <button
              onClick={() => setCartCount((prev) => prev + 1)}
              className="mt-3 bg-pink-600 text-white px-4 py-2 rounded w-full hover:bg-pink-700"
            >
              Add to Cart
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default productList;