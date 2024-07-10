import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialStateValue = localStorage.getItem("menuColor") || 1;

const menuColor = createSlice({
  name: "changeLogo",
  initialState: { menuClassname: initialStateValue },
  reducers: {
    changeColor: (state, action) => {
      const newColor = action.payload;
      state.menuClassname = newColor;
      localStorage.setItem("menuColor", newColor);
    },
  },
});

const search = createSlice({
  name: "hide and show",
  initialState: { className: false },
  reducers: {
    handleSearch: (state, action) => {
      console.log(action.payload);
      if (action.payload === "2") {
        state.className = !state.className;
      }
    },
  },
});

const explore = createSlice({
  name: "explore",
  initialState: false,
  reducers: {
    hide: (state, action) => {
      return action.payload === 3 && true;
    },
  },
});

const reelOverlay = createSlice({
  name: "reelOverlay",
  initialState: false,
  reducers: {
    manageOverlay: (state, action) => {
      return action.payload === "hide" && true;
    },
  },
});

const store = configureStore({
  reducer: {
    menuColorSlice: menuColor.reducer,
    searchSlice: search.reducer,
    exploreSlice: explore.reducer,
    reelOverlaySlice: reelOverlay.reducer,
  },
});

export default store;
export const menuColorSlice = menuColor.actions;
export const searchSlice = search.actions;
export const exploreSlice = explore.actions;
export const reelOverlaySlice = reelOverlay.actions;
