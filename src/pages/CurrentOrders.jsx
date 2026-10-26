
import React from "react";

function CurrentOrder() {
  const orders = [
    { id: 101, product: "Laptop", status: "Processing", price: 50000 },
    { id: 102, product: "Mobile", status: "Shipped", price: 20000 },
    { id: 103, product: "Headphones", status: "Processing", price: 1500 },
  ];

  return (
    <div className="order-container">
      <h2>Current Orders</h2>

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

export default CurrentOrder;
