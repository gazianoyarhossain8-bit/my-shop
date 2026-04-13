import { useSelector, useDispatch } from "react-redux";
import { logout, login } from "../Redux/userSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { setSearch } from "../Redux/searchSlice";

function Header() {
  const cartCount = useSelector((state) => state.cart.items.length);
  const user = useSelector((state) => state.user);
  const search = useSelector((state) => state.search.keyword);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link to="/" className="text-2xl font-bold text-blue-600">A-Shop</Link>

        <div className="">
          <input 
            type="text"
            value={search}
            placeholder="Search product..."
            className="w-full px-4 py-2 border rounded-lg"
            onChange={(e) => dispatch(setSearch(e.target.value))}
          />
          {search}
        </div>

        <div className="flex items-center gap-6">

          {user.isLoggedIn ? (
            <button onClick={() => dispatch(logout())} className="text-red-500">
              Logout ({user.username})
            </button>
          ) : (
            <button onClick={() => navigate("/login")} className="text-green-600">
              Login
            </button>
          )}

          <Link to="/cart" className="relative">
            🛒
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
              {cartCount}
            </span>
          </Link>
        </div>
        
      </div>

      <div className="px-4 pb-4 md:hidden">
       
      </div>
    </header>
  );
}

export default Header;