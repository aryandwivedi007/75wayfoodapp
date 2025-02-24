import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Restaurant {
  name: string;
  cuisines: string;
  meanRating: number;
  cost: number;
}

interface RestaurantState {
  suggestions: string[];
  recommendations: Restaurant[];
}

const initialState: RestaurantState = {
  suggestions: [],
  recommendations: [],
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setSuggestions(state, action: PayloadAction<string[]>) {
      state.suggestions = action.payload;
    },
    setRecommendations(state, action: PayloadAction<Restaurant[]>) {
      state.recommendations = action.payload;
    },
    clearRestaurantData(state) {
      state.suggestions = [];
      state.recommendations = [];
    },
  },
});

export const { setSuggestions, setRecommendations, clearRestaurantData } = restaurantSlice.actions;
export default restaurantSlice.reducer;
