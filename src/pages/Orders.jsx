
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Order() {
  return (
    <div className="orders-page">
      <h1>E-Commerce Order Management</h1>

      <nav className="order-nav">
        <NavLink to="/orders/current">
          Current Orders
        </NavLink>

        <NavLink to="/orders/history">
          Order History
        </NavLink>

        <NavLink to="/orders/cancelled">
          Cancelled Orders
        </NavLink>
      </nav>

      <div className="nested-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Order;
