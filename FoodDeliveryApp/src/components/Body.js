import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { DOMINOS_IMG_URL, SWIGGY_DATA_API_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  //React Hooks(Normal JS utility functions imported from react)
  //useEffect
  //useState - SuperPowerful state vaiable in react
  //Whenever state variable changes, the react re-renders the component
  const arr = useState([]); //resList

  //   const [listOfRestaurants, setListOfRestaurants] = arr; //Destructuring the array returned by useState

  const listOfRestaurants = arr[0]; // Accessing the first element of the array
  const setListOfRestaurants = arr[1]; // Accessing the second element of the

  let [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);
  // Normal JS variable
  //   let listofRestaurants = [
  //     {
  //       info: {
  //         id: "707532",
  //         name: "Domino's Pizza",
  //         cloudinaryImageId:
  //           "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/13/4d6734d8-8643-4d8d-a739-37ef82166d2a_707532.JPG",
  //         costForTwo: "₹400 for two",
  //         cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
  //         avgRating: 4.4,
  //         avgRatingString: "4.4",
  //         sla: {
  //           deliveryTime: 20,
  //         },
  //       },
  //     },
  //     {
  //       info: {
  //         id: "600203",
  //         name: "KFC",
  //         cloudinaryImageId:
  //           "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/32353f3e-5aea-4d96-9407-77d5c9015267_600203.JPG",
  //         costForTwo: "₹400 for two",
  //         cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
  //         avgRating: 4.1,
  //         sla: {
  //           deliveryTime: 28,
  //         },
  //       },
  //     },
  //   ];
  console.log(listOfRestaurants);

  const [searchText, setSearchText] = useState(""); // State variable for search input

  //If no dependency array is passed, useEffect runs after every render
  //If an empty dependency array is passed,[]=> useEffect runs only once after the initial render
  //If a dependency array with variables is passed, [searchText]=> useEffect runs after the initial render and whenever any of the variables in the array change
  useEffect(() => {
    // This code runs after the component mounts
    console.log("useEffect called");

    // Fetching data from an API
    fetchData();

    const timer = setInterval(() => {
      console.log("Interval");
    }, 1000);

    //Called for Unmounting
    return () => {
      clearInterval(timer);
      console.log("Body Unmounted");
    };
  }, []); // Empty dependency array means this effect runs only once after the initial render

  //2nd time if want to write seperate logic
  // useEffect(() => {
  //   console.log("useEffect called");
  // }, [listOfRestaurants]);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_DATA_API_URL);
    const json = await data.json();
    console.log(json);

    setListOfRestaurants(
      //optional chaining
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Conditional Rendering
  //   if (listOfRestaurants.length === 0) {
  // return (
  //   <div className="wrapper">
  //     <span className="dot"></span>
  //     <span className="dot"></span>
  //     <span className="dot"></span>
  //     <span className="dot"></span>
  //   </div>
  // );
  //     return <Shimmer />; // Show shimmer effect while data is being fetched
  //   }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false) {
    return <h1>Looks like You're offline.</h1>;
  }

  console.log("Body rendered");

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex justify-center">
        <div className="mt-4 mx-4 shadow-lg">
          <button
            className="filter-btn p-2 rounded-lg bg-gray-200 hover:cursor-pointer"
            onMouseOver={() => console.log("Mouse hovered")}
            onClick={() => {
              filteredListOfRestaurants = listOfRestaurants.filter(
                (restaurant) => {
                  return restaurant.info.avgRating > 4.4;
                }
              );
              setFilteredListOfRestaurants(filteredListOfRestaurants);
              console.log(filteredListOfRestaurants);
            }}
          >
            Top Rated
          </button>
        </div>
        <div className="w-52 mt-5">
          <input
            type="text"
            placeholder="Search for restaurants"
            className="search-input border rounded-md p-1"
            value={searchText}
            onChange={(e) => {
              // Update searchText state variable
              setSearchText(e.target.value);
              console.log(e.target.value);
            }}
          ></input>
        </div>
        <div className="mt-4">
          <button
            className="filter-btn rounded-lg p-2 shadow-lg bg-green-100 hover:cursor-pointer"
            onClick={() => {
              // Filter restaurants based on a condition
              console.log(searchText);
              filteredListOfRestaurants = listOfRestaurants.filter(
                (restaurant) => {
                  // Check if the restaurant name includes the search text
                  return restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                }
              );

              setFilteredListOfRestaurants(filteredListOfRestaurants);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="restaurant-container flex flex-wrap mx-16">
        {filteredListOfRestaurants.map((restaurant, index) => (
          // Using index as key is not recommended in production, but okay for this example
          <Link
            className="restaurant-link "
            to={"/restaurants/" + restaurant.info.id}
            key={index /*restaurant.info.id*/}
          >
            <RestaurantCard data={restaurant} />
          </Link>
        ))}
        {/* <RestaurantCard
          data={resList[0]}
          name="Dominos"
          cuisine="paizza,fast food, slice"
          rating="4.2"
          delivery="30"
          price="200"
          imageUrl={DOMINOS_IMG_URL}
        /> */}
      </div>
    </div>
  );
};

export default Body;
