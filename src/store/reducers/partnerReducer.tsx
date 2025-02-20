import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PartnerApplication {
  restaurantName: string;
  ownerName: string;
  email: string;
  phone: string;
  address: string;
  cuisine: string;
  website?: string;
}

interface PartnerState {
  applications: PartnerApplication[];
}

const initialState: PartnerState = {
  applications: [],
};

const partnerSlice = createSlice({
  name: "partner",
  initialState,
  reducers: {
    submitPartnerApplication(state, action: PayloadAction<PartnerApplication>) {
      state.applications.push(action.payload);
    },
    clearApplications(state) {
      state.applications = [];
    },
  },
});

export const { submitPartnerApplication, clearApplications } = partnerSlice.actions;
export default partnerSlice.reducer;
