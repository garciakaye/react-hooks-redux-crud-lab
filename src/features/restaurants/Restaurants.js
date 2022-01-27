import React from "react";
import Restaurant from "./Restaurant";

// This component reders a list of restaurants


function Restaurants({ restaurants }) {
  return (
    <ul>
      {restaurants.map((r) => (
        <Restaurant key={r.id} restaurant={r} />
      ))}
    </ul>
  );
}

export default Restaurants;
