import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useSelector } from "react-redux";

const Product = () => {
  const products = useSelector((state) => state.cart.products);
  // Savatdagi barcha mahsulotlarning umumiy narxini hisoblash
  const itemTotal = products.reduce(
    // Accumulate total price based on product quantity and price
    (total, product) => total + product.price * product.quantity, // Initial total value
    0
  );
  // 12% stavka asosida QQS (Qo'shilgan qiymat solig'i) ni hisoblash
  const vat = itemTotal * 0.12;
  // 12% VAT
  const grandTotal = itemTotal + vat; // QQSni o'z ichiga olgan umumiy summani hisoblash
  // QQS bilan umumiy narx
  return (
    <div className="p-8 bg-white shadow-lg rounded-lg border border-gray-200">
      <div className="mb-6 border-b border-gray-300 pb-4">
        <p className="text-xl font-semibold text-gray-800">
          Item Total: <span className="font-bold">${itemTotal.toFixed(2)}</span>
        </p>
        <p className="text-xl font-semibold text-gray-800">
          VAT (12%): <span className="font-bold">${vat.toFixed(2)}</span>
        </p>
        <p className="text-2xl font-bold text-gray-900 mt-2">
          Grand Total:{" "}
          <span className="font-bold">${grandTotal.toFixed(2)}</span>
        </p>
      </div>
      {products.length ? (
        <div className="space-y-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-start space-x-4 border-b border-gray-300 pb-4"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-32 h-32 object-cover rounded-md shadow-sm"
              />
              <div className="flex-1">
                <p className="text-lg font-semibold text-gray-800 truncate">
                  {product.title}
                </p>
                <p className="text-md text-gray-600 mt-1">
                  ${product.price.toFixed(2)}
                </p>
                <div className="flex items-center mt-2 space-x-1">
                  <AiFillStar className="text-yellow-400" />
                  <p className="text-sm text-gray-600">
                    {product.rating.toFixed(1)}
                  </p>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.tags.length ? (
                    product.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))
                  ) : (
                    <p className="text-sm text-gray-600">No tags</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No products in cart</p>
      )}
    </div>
  );
};

export default Product;
