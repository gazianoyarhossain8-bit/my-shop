import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { addToCart } from "../Redux/cartSlice";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.products.items.find((p) => p._id === id)
  );

  const userId = localStorage.getItem("userId");
  

  const handleBuy = async () => {
    try {
      const res = await axios.post("http://localhost:7000/api/orders", {
        
        productId: product._id,
        quantity: 1,
        totalPrice: product.price * 1,
        image: product.image,
      });

      alert("Order Placed Successfully!");
      console.log(res.data);

    } catch (error) {
      alert("Order Failed");
      console.log(error);
    }
  };

  if (!product)
    return <h2 className="text-center mt-10">Product Not Found</h2>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={`http://localhost:7000/${product.image}`}
        className="w-80 rounded"
      />

      <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
      <p className="text-xl mt-2">{product.price} ₹</p>
      <p className="mt-2 text-gray-700">{product.description}</p>

      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-4 bg-blue-600 px-4 py-2 text-white rounded"
      >
        Add to Cart
      </button>

      <button
        onClick={handleBuy}
        className="bg-blue-400 px-4 p-2 rounded-lg mt-7"
      >
        Buy
      </button>
    </div>
  );
}

export default ProductDetails;