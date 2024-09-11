import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  // Redux do'kon holatidan savat mahsulotlarini tanlash
  const cartProducts = useSelector((state) => state.cart.products); // Savatdagi narsalarning umumiy sonini hisoblash
  const itemCount = cartProducts.reduce(
    (total, product) => total + product.quantity, // Har bir mahsulot miqdorini productga qo'shiladi
    0 // valiusini protuctga qo'shib beradi
  );

  return (
    <nav className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4 lg:p-6">
        <Link
          to="/"
          className="text-2xl lg:text-3xl font-bold hover:text-gray-300 transition-colors"
        >
          Logotip
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-lg font-medium hover:text-gray-300 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-lg font-medium hover:text-gray-300 transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-lg font-medium hover:text-gray-300 transition-colors"
          >
            Contact
          </Link>
          <Link
            to="/blog"
            className="text-lg font-medium hover:text-gray-300 transition-colors"
          >
            Blog
          </Link>
        </div>
        <div className="relative flex items-center">
          <Link
            to="/cart"
            className="flex items-center text-lg hover:text-gray-300 transition-colors"
          >
            <FaShoppingBag size={24} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
