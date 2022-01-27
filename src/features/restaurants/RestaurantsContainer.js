import React from "react";
import { useSelector } from "react-redux";
import RestaurantInput from "./RestaurantInput";
import Restaurants from "./Restaurants";

// This component connects to to Redux
// and pass the appropriate props down to its children

function RestaurantsContainer() {
  const restaurants = useSelector((state) => state.restaurants.entities);
  return (
    <div>
      <RestaurantInput />
      <Restaurants restaurants={restaurants} />
    </div>
  );
}


export default RestaurantsContainer;
