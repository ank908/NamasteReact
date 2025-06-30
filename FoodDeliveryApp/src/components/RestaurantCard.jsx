import { CDN_URL, LOGO_URL, SWIGGY_MENU_API_URL } from "../utils/constant";
import { Link } from "react-router-dom";

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
    areaName = "",
    id = "",
  } = data?.info || {};

  return (
    // {{ backgroundColor: "#f0f0f0"}}
    <div
      /*style={styleCard}*/ className="restaurant-card m-4 w-[286px] rounded-lg hover:bg-gray-100 hover:scale-95 transition-transform duration-100"
    >
      <div className="aspect-w-16 aspect-h-9">
        <img
          className="restaurant-logo rounded-lg w-full h-48 object-cover"
          src={CDN_URL + cloudinaryImageId}
          alt="Restaurant Logo"
        />
      </div>

      <div className="name text-lg font-bold py-2 overflow-hidden text-ellipsis line-clamp-1 break-words">
        {name}
      </div>
      <div className="row1 flex flex-wrap pb-2">
        <div className="rating-icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
            strokecolor="rgba(2, 6, 12, 0.92)"
            fillcolor="rgba(2, 6, 12, 0.92)"
          >
            <circle
              cx="10"
              cy="10"
              r="9"
              fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
            ></circle>
            <path
              d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
              fill="white"
            ></path>
            <defs>
              <linearGradient
                id="StoreRating20_svg__paint0_linear_32982_71567"
                x1="10"
                y1="1"
                x2="10"
                y2="19"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#21973B"></stop>
                <stop offset="1" stopColor="#128540"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="rating-score px-1">{avgRating}</div>
        <div className="time"> • {sla.deliveryTime} mins</div>
      </div>
      <div className="cuisine text-[rgba(2,6,12,0.6)] overflow-hidden text-ellipsis line-clamp-1 break-words">
        {cuisines.join(", ")}
      </div>
      <div className="row2 flex flex-wrap justify-between text-[rgba(2,6,12,0.6)]">
        <div className="location">
          <div>{areaName}</div>
        </div>
        <div className="cost">
          <div>{costForTwo}</div>
        </div>
      </div>
      {/* <h5>₹{costForTwo / 100} For Two</h5> */}
    </div>
  );
};

export default RestaurantCard;

// export const title = <h1 className="title">Food Delivery App</h1>;
