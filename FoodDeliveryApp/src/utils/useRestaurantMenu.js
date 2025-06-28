import { useEffect, useState } from "react";
import { SWIGGY_MENU_API_URL } from "./constant";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);
  const fetchRestaurantMenu = async () => {
    const data = await fetch(SWIGGY_MENU_API_URL + resId);
    const json = await data.json();
    setResInfo(json);
    console.log(json);
  };

  return resInfo;
};

export default useRestaurantMenu;
