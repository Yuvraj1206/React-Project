import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      return (state.fetchDone = true);
    },
    markFetchStarted: (state) => {
      return (state.currentlyFetching = true);
    },
    markFetchEnd: (state) => {
      return (state.currentlyFetching = false);
    },
  },
});

export const fetchActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
