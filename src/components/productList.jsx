import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/productSlice";
import { addToCart } from "../Redux/cartSlice";
import { Link } from "react-router-dom";

function ProductList() {
  const dispatch = useDispatch();

  const { items: products, loading, currentPage, totalPages } = useSelector(
    (state) => state.products
  );

  const search = useSelector((state) => state.search.keyword); //  ADD THIS

  const [page, setPage] = useState(1);

  //  page + search dono bhejo
  useEffect(() => {
    dispatch(fetchProducts({ page, search }));
  }, [page, search]); // dependency me search add

  // search change ho to page reset
  useEffect(() => {
    setPage(1);
  }, [search]);

  if (loading) return <h1 className="text-center mt-10">Loading...</h1>;

  return (
    <>
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p) => (
          <div key={p._id} className="border p-3 rounded-lg shadow">
            <Link to={`/product/${p._id}`}>
              <img
                src={`https://shop-backend-mz62.onrender.com/${p.image}`}
                className="w-full h-40 object-cover"
              />
            </Link>

            <h2 className="font-semibold mt-2">Name: {p.name}</h2>
            <p>Description: {p.description}</p>
            <p className="text-gray-600">{p.price} ₹</p>

            <button
              onClick={() => dispatch(addToCart(p))}
              className="mt-2 w-full bg-blue-600 text-white py-1 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* ❗ Optional: search ke time pagination hide */}
      {!search && (
        <div className="flex justify-center gap-4 my-6">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-40"
          >
            Prev
          </button>

          <span className="text-lg font-semibold">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}

export default ProductList;