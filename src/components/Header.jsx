import React, { useState } from "react";
import { FaShoppingCart, FaUser, FaBars } from "react-icons/fa";

function Header({
  cartCount,
  isLoggedIn,
  setIsLoggedIn,
  searchTerm,
  setSearchTerm,
}) {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="bg-pink-600 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold">MyShop</h1>

        {/* Search (Desktop) */}
        <input
          type="text"
          placeholder="Search products..."
          className="hidden md:block px-3 py-1 rounded text-black w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Cart */}
          <div className="relative cursor-pointer">
            <FaShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs px-2 rounded-full">
                {cartCount}
              </span>
            )}
          </div>

          {/* Login/Logout */}
          <button
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            className="flex items-center gap-1"
          >
            <FaUser />
            {isLoggedIn ? "Logout" : "Login"}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <FaBars size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Search + Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-pink-500 p-4 space-y-3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 rounded text-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">Categories</p>
          <p className="cursor-pointer">Orders</p>
        </div>
      )}
    </header>
  );
}

export default Header;