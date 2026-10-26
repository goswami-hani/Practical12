
import React from "react";

function OrderHistory() {
  const orders = [
    { id: 201, product: "Keyboard", price: 1200, status: "Delivered" },
    { id: 202, product: "Mouse", price: 700, status: "Delivered" },
    { id: 203, product: "Monitor", price: 12000, status: "Delivered" },
  ];

  return (
    <div className="order-container">
      <h2>Order History</h2>

      {orders.map((order) => (
        <div className="order-card" key={order.id}>
          <h3>Order #{order.id}</h3>
          <p>Product: {order.product}</p>
          <p>Price: ₹{order.price.toLocaleString("en-IN")}</p>
          <p>Status: <span className="status">{order.status}</span></p>
        </div>
      ))}
    </div>
  );
}

export default OrderHistory;
