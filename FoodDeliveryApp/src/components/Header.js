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
      <div className="header flex justify-between bg-cyan-100 shadow-lg">
        <div className="logo-container">
          <img
            className="logo w-36"
            src={image}
            // src={LOGO_URL}
            alt="My Foodie Logo"
          />

          {/* <title></title> */}
        </div>
        <div className="nav-items flex items-center">
          <ul className="flex p-4 m-4 gap-4 ">
            <li className="hover:text-[rgb(216,102,9)]">
              {/* It refreshes the component anchor tag reload page  */}
              {/* For SPA we use link*/}
              {/* Routing is of 2 types Server Side Routing and Client Side Routing */}
              {/* This is CSR as all the components are loaded in begining and relaced on client side when needed */}
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-[rgb(216,102,9)]">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-[rgb(216,102,9)]">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="hover:text-[rgb(216,102,9)]">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="flex gap-1 cursor-pointer hover:text-[rgb(216,102,9)]">
              <span>🛒</span> Cart
            </li>
            <li className="hover:text-[rgb(216,102,9)]">
              <button
                className="login cursor-pointer"
                onClick={() => {
                  // btnName = "Logout";
                  setBtnName(btnName === "Login" ? "Logout" : "Login"); // Toggle button name between Login and Logout
                  console.log(btnName);
                }}
              >
                {btnName}
              </button>
            </li>
            <li className="status flex gap-1 hover:text-[rgb(216,102,9)]">
              {/* {useOnlineStatus() ? (
                <div className="online"></div>
              ) : (
                <div className="offline"></div>
              )} */}
              Status {useOnlineStatus() ? <span>✅</span> : <span>🔴</span>}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
