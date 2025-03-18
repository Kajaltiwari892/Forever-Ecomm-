import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
  
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Orders</h1>
      {orders.length === 0 ? (
        <p className="text-center text-gray-600">
          You have not placed any orders yet.
        </p>
      ) : (
        <div className="space-y-6">
          {orders.map((order, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <div className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="text-lg font-bold">Order ID: {order.id}</p>
                  <p className="text-sm text-gray-600">Date: {order.date}</p>
                </div>
                <div className="text-xl font-semibold text-green-600">
                  ${order.total.toFixed(2)}
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-lg font-bold mb-2">Items:</h2>
                <ul className="space-y-2">
                  {order.items.map((item, i) => (
                    <li key={i} className="flex justify-between">
                      <span>{item.title} (x{item.quantity})</span>
                      <span>
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <p className="text-gray-700">
                  <span className="font-bold">Delivery Fee:</span> ${order.deliveryFee}
                </p>
                <p className="text-gray-700">
                  <span className="font-bold">Grand Total:</span> ${order.total.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
