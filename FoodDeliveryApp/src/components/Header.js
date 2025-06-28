import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
// import Grocery from "./Grocery.js";
//import image from "../assets/foodie.png";
const image = new URL("../assets/foodie.png", import.meta.url).href;

// import { title } from "./RestaurantCard";

const Header = () => {
  // let btnName = "Login";
  let [btnName, setBtnName] = useState("Login"); // Using useState to manage the button name state

  console.log("Header rendered");

  return (
    <header>
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={image}
            // src={LOGO_URL}
            alt="My Foodie Logo"
          />

          {/* <title></title> */}
        </div>
        <div className="nav-items">
          <ul>
            <li>
              {/* It refreshes the component anchor tag reload page  */}
              {/* For SPA we use link*/}
              {/* Routing is of 2 types Server Side Routing and Client Side Routing */}
              {/* This is CSR as all the components are loaded in begining and relaced on client side when needed */}
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>🛒 Cart</li>
            <li>
              <button
                onClick={() => {
                  // btnName = "Logout";
                  setBtnName(btnName === "Login" ? "Logout" : "Login"); // Toggle button name between Login and Logout
                  console.log(btnName);
                }}
                className="login"
              >
                {btnName}
              </button>
            </li>
            <li className="status">
              {/* {useOnlineStatus() ? (
                <div className="online"></div>
              ) : (
                <div className="offline"></div>
              )} */}
              Status {useOnlineStatus() ? "✅" : "🔴"}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
