import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { SWIGGY_MENU_API_URL } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";

function RestaurantMenu() {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  //  const [resInfo, setResInfo] = useState(null);

  // useEffect(() => {
  //   fetchRestaurantMenu();
  // }, []);

  // const fetchRestaurantMenu = async () => {
  //   const data = await fetch(SWIGGY_MENU_API_URL + resId);
  //   const json = await data.json();
  //   setResInfo(json);
  //   console.log(json);
  // };

  if (resInfo === null) return <Shimmer />;

  const {
    name = "",
    cuisines = [],
    sla = {},
    totalRatingsString = "",
    costForTwoMessage = "",
    areaName = "",
    avgRating = "",
  } = resInfo?.data?.cards[2]?.card?.card?.info;

  const { title, itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div className="Menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(",")}</h2>
      <h3>{sla.slaString}</h3>
      <h3>
        {avgRating}
        {totalRatingsString}
      </h3>
      <h3>{areaName}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>{title}</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            <div>
              <div>
                <h3>{item.card.info.name}</h3>
                {item.card.info.price}
                {item.card.info.ratings.aggregatedRating.rating}
                {item.card.info.ratings.aggregatedRating.ratingCountV2}
                {item.card.info.itemAttribute.vegClassifier}
              </div>

              {item.card.info.description}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantMenu;
