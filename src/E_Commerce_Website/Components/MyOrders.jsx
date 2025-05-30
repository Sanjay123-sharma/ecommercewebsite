import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router";
import { removeOrder } from "../Store/Slice";

export default function MyOrders() {
  const Order = useSelector((state) => state.product.Order);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeOrder(id));
    alert(" Order Cancel Successfully");
  };
  return (
    <div className="bg-gray-800 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white-800 shadow p-4 flex items-center justify-between">
        <h1
          className="text-2xl font-bold text-white-200"
          style={{ color: "white" }}
        >
          My Orders
        </h1>
        <NavLink to="/" className="text-blue-600 font-bold hover:underline">
          Home
        </NavLink>
      </header>
      <h1
        className="text-2xl font-bold text-white-200 text-center"
        style={{ color: "white" }}
      >
        Confirmed Orders
      </h1>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {Order.length === 0 ? (
          <h2 style={{ color: "white", fontSize: "20px" }}>No Order Yet</h2>
        ) : (
          <div className="space-y-2">
            {Order.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow p-4 flex gap-6 items-center"
              >
                <div className="w-24 h-24 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-full object-contain rounded"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Rating: {item.rate}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Quantity: {item.count}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Price: ${item.count * item.price}
                  </div>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-600 hover:bg-red-700 text-white py-2 px-2 rounded-lg"
                  >
                    Cancel Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white shadow p-8 text-center text-sm text-gray-600">
        Made by Sanjay @2025
      </footer>
    </div>
  );
}
