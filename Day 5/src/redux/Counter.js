import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    total: 0, // Total count
    partyCounts: [0, 0, 0, 0], // Array to track counts for each party (including Party 4)
  },
  reducers: {
    incrementTotal: (state) => {
      state.total += 1;
    },
    incrementParty1: (state) => {
      state.partyCounts[0] += 1;
    },
    incrementParty2: (state) => {
      state.partyCounts[1] += 1;
    },
    incrementParty3: (state) => {
      state.partyCounts[2] += 1;
    },
    incrementParty4: (state) => {
      state.partyCounts[3] += 1;
    },
  },
});

export const {
  incrementTotal,
  incrementParty1,
  incrementParty2,
  incrementParty3,
  incrementParty4, // Added increment action for Party 4
} = counterSlice.actions;

export default counterSlice.reducer;
