import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../Redux/cartSlice";

function CartPage() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cart.reduce((t, item) => t + item.price * item.qty, 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <h2>No items in cart</h2>
      ) : (
        cart.map((item) => (
          <div key={item._id} className="flex justify-between border p-3 mb-3">
            <div>
              <h2>{item.name}</h2>
              <p>{item.price} x {item.qty}</p>
            </div>

            <button
              onClick={() => dispatch(removeFromCart(item._id))}
              className="text-red-600"
            >
              Remove
            </button>
          </div>
        ))
      )}

      <h2 className="text-xl font-bold mt-4">Total: {total} ₹</h2>
    </div>
  );
}

export default CartPage;