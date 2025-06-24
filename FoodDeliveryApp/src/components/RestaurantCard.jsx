import { CDN_URL, LOGO_URL } from "../utils/constant";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

//props are properties that are passed to a component(function)
//config driven UI
const RestaurantCard = (props) => {
  // const { name, cuisine, rating, delivery, price, imageUrl } = props;
  const { data } = props;

  // const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } =
  //   data?.info;

  const {
    name = "",
    cuisines = [],
    avgRating = "",
    sla = {},
    costForTwo = "",
    cloudinaryImageId = "",
  } = data?.info || {};

  return (
    // {{ backgroundColor: "#f0f0f0"}}
    <div style={styleCard} className="restaurant-card">
      <img
        className="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="Restaurant Logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Rating: {avgRating}⭐️</h4>
      <h5>{sla.deliveryTime} mins</h5>
      {/* <h5>₹{costForTwo / 100} For Two</h5> */}
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default RestaurantCard;

// export const title = <h1 className="title">Food Delivery App</h1>;
