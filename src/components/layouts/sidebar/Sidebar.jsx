import React, { useContext } from "react";
import "./sidebar.scss";
import {
  FiLayers,
  FiUsers,
  FiBox,
  FiGrid,
  FiActivity,
  FiArchive,
  FiTruck,
  FiShoppingBag,
  FiCpu,
  FiBell,
  FiRefreshCw,
  FiSettings,
  FiUser,
  FiLogOut,
} from "react-icons/fi";

import { Link } from "react-router-dom";
import { DarkModeContext } from '../../../context/darkModeContext'; 


function Sidebar() {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top__sidebar">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">AKIALOH SCM</span>
        </Link>
      </div>
      <hr />
      <div className="center__sidebar">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>  
            <li>
              <FiLayers className="sidebar__icon" />
              <span>Home </span>
            </li>
          </Link>
          <p className="title">LIST MENU</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <FiUsers className="sidebar__icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <FiBox className="sidebar__icon" />
              <span>Products</span>
            </li>
          </Link>
          <Link to="/categories" style={{ textDecoration: "none" }}>
            <li>
              <FiGrid className="sidebar__icon" />
              <span>Categories</span>
            </li>
          </Link>
          <Link to="/orders" style={{ textDecoration: "none" }}>
            <li>
              <FiArchive className="sidebar__icon" />
              <span>Orders</span>
            </li>
          </Link>
          <Link to="/shippings" style={{ textDecoration: "none" }}>
            <li>
              <FiTruck className="sidebar__icon" />
              <span>Shippings</span>
            </li>
          </Link>
          <Link to="/deliveries" style={{ textDecoration: "none" }}>
            <li>
              <FiShoppingBag className="sidebar__icon" />
              <span>Delivery</span>
            </li>
          </Link>
          <Link to="/stats" style={{ textDecoration: "none" }}>
            <li>
              <FiActivity className="sidebar__icon" />
              <span>Stats</span>
            </li>
          </Link>
          <Link to="/notifications" style={{ textDecoration: "none" }}>
            <li>
              <FiBell className="sidebar__icon" />
              <span>Notifications</span>
            </li>
          </Link>
          <p className="title">SERVICES</p>
          <Link to="/services" style={{ textDecoration: "none" }}>
            <li>
              <FiCpu className="sidebar__icon" />
              <span>Systems Health</span>
            </li>
          </Link>
          <Link to="/logs" style={{ textDecoration: "none" }}>
            <li>
              <FiRefreshCw className="sidebar__icon" />
              <span>Logs</span>
            </li>
          </Link>
          <Link to="/settings" style={{ textDecoration: "none" }}>
            <li>
              <FiSettings className="sidebar__icon" />
              <span>Settings</span>
            </li>
          </Link>
          <p className="title">USER</p>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <li>
              <FiUser className="sidebar__icon" />
              <span>Profile</span>
            </li>
          </Link>
          <Link to="/logout" style={{ textDecoration: "none" }}>
            <li>
              <FiLogOut className="sidebar__icon" />
              <span>Logout</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="bottom__sidebar">
        <div className="colorOption" onClick={() => dispatch({ type: "LIGHT"})}></div>
        <div className="colorOption" onClick={() => dispatch({ type: "DARK"})}></div>
      </div>
    </div>
  );
}

export default Sidebar;
