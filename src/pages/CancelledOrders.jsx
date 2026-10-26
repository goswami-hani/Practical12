
import React from "react";

function CancelledOrders() {
  const orders = [
    { id: 301, product: "Smart Watch", price: 3000 },
    { id: 302, product: "Bluetooth Speaker", price: 2500 },
  ];

  return (
    <div className="order-container">
      <h2>Cancelled Orders</h2>

      {orders.map((order) => (
        <div className="order-card" key={order.id}>
          <h3>Order #{order.id}</h3>
          <p>Product: {order.product}</p>
          <p>Price: ₹{order.price.toLocaleString("en-IN")}</p>
          <p>Status: <span className="cancelled">Cancelled</span></p>
        </div>
      ))}
    </div>
  );
}

export default CancelledOrders;
