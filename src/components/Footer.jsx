import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const nav = useNavigate();

  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Section */}
        <div>
          <h1 className="text-2xl font-bold text-green-400">My Shop</h1>
          <p className="mt-3 text-sm text-gray-400">
            Your one-stop destination for quality products. Shop smart, live better.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li
              className="hover:text-green-400 cursor-pointer"
              onClick={() => nav("/products")}
            >
              Products
            </li>
            <li
              className="hover:text-green-400 cursor-pointer"
              onClick={() => nav("/orders")}
            >
              Orders
            </li>
            <li
              className="hover:text-green-400 cursor-pointer"
              onClick={() => nav("/ProductUpload")}
            >
              Upload Product
            </li>
          </ul>
        </div>

        {/* Actions / CTA */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Actions</h2>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => nav("/ProductUpload")}
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition"
            >
              Upload Product
            </button>
            <button
              onClick={() => nav("/orders")}
              className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition"
            >
              View Orders
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © 2026 My Shop. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;