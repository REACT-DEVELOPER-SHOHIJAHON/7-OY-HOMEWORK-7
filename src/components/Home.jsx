import React from "react";
import { useDispatch } from "react-redux";
import { useFetch } from "../usefetch/UseFetch";
import { addProductToCart } from "../store/cartSlice";

const Home = () => {
  // 100 ta mahsulot chegarasi bilan API soʻnggi nuqtasidan mahsulot maʼlumotlarini olish
  const { data: products } = useFetch("/products?limit=100");
  // Harakatlarni jo'natish uchun Redux-dan jo'natish funksiyasini olish
  const dispatch = useDispatch();
  // Savatga mahsulotni qo'shish funksiyasi qo'shish funksiyasini olish
  const handleAddProduct = (product) => {
    // Savatga 1 ta mahsulot qo'shish harakatini yuboring
    dispatch(addProductToCart({ ...product, quantity: 1 }));
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Our Products
      </h1>
      {products ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  {product.title}
                </h2>
                <p className="text-lg text-gray-700 mt-1">
                  ${product.price.toFixed(2)}
                </p>
                <button
                  onClick={() => handleAddProduct(product)}
                  className="mt-4 bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 text-lg">Loading products...</p>
      )}
    </div>
  );
};

export default Home;
