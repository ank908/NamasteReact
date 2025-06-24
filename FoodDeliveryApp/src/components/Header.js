import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

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
            // src="/Users/ank/NamasteReact/FoodDeliveryApp/foodie.png"
            src={LOGO_URL}
            alt="My Foodie Logo"
          />

          {/* <title></title> */}
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>🛒Cart</li>
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
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
