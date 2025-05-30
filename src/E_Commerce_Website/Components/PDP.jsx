import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router";

export default function PDP() {
  const { id } = useParams();
  const ProductList = useSelector((state) => state.product.ProductList);
  let Product = ProductList.find((item) => item.id.toString() === id);

  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col">
      {/* Header */}
      <header className="bg-gray-700 p-4">
        <h1 className="text-3xl font-bold text-center text-white">
          Product Detail Page
        </h1>
        <NavLink to={"/"} style={{ color: "blue1we" }}>
          Home
        </NavLink>
      </header>
      <br />

      {/* Main Content */}
      <main className="flex-grow p-4">
        {!Product ? (
          <h1 className="text-red-500 text-2xl text-center">
            Product Not Found
          </h1>
        ) : (
          <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-100">
              {Product.title}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Image */}
              <div className="flex justify-center items-center">
                <img
                  src={Product.image}
                  alt={Product.title}
                  className="h-64 object-contain rounded-xl"
                />
              </div>

              {/* Details */}
              <div className="space-y-3">
                <div className="text-yellow-400 text-lg">
                  Rating: {Product.rating.rate}
                </div>
                <div className="text-yellow-300 text-sm">
                  Count: {Product.rating.count}
                </div>
                <div className="text-green-400 text-xl font-bold">
                  ${Product.price}
                </div>
                <div className="text-gray-300">{Product.description}</div>
                <div className="text-gray-400 italic">
                  Category: {Product.category}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-700 p-4 text-center text-sm text-gray-200">
        Made by Sanjay 2025
      </footer>
    </div>
  );
}
