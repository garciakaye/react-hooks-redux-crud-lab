import { v4 as uuid } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const reviewsSlice = createSlice({
  name: "reviews",
  initialState: {
    entities: [],
  },
  reducers: {
    reviewAdded(state, action) {
      state.entities.push({ id: uuid(), ...action.payload });
    },
    reviewRemoved(state, action) {
      const index = state.entities.findIndex((r) => r.id === action.payload);
      state.entities.splice(index, 1);
    },
  },
});

export const { reviewAdded, reviewRemoved } = reviewsSlice.actions;

export default reviewsSlice.reducer;

// Since you'll need to be able to associate reviews to restaurants, and delete specific reviews, reviews stored in Redux should have a comment key for the review content, a restaurantId key to associate and display the review with a specific restaurant and an id key unique to the review itself.

// export and use its reducer in the ./src/store.js file