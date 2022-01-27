import { v4 as uuid } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    entities: [],
  },
  reducers: {
    // should take a string of the restaurant name
    // and add a new restaurant to the array of entities
    // restaurant should have a name and id
    restaurantAdded(state, action) {
      state.entities.push({ id: uuid(), name: action.payload });
    },
    // should take the restaurant ID as the payload
    //  and remove the restaurant from the array of entities in state
    restaurantRemoved(state, action) {
      const index = state.entities.findIndex((r) => r.id === action.payload);
      state.entities.splice(index, 1);
    },
  },
});

export const { restaurantAdded, restaurantRemoved } = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
