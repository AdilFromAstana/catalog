import { createSlice } from "@reduxjs/toolkit";

const attributesSlice = createSlice({
  name: "attributes",
  initialState: {
    attributes: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setAttributes: (state, action) => {
      state.attributes = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    resetAttributes: (state) => {
      state.attributes = [];
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const { setAttributes, resetAttributes } = attributesSlice.actions;
export default attributesSlice.reducer;
