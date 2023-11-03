import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  postDetails: null,
  searchResults: [],
  imageUrl: "https://image.tmdb.org/t/p/w500",
};

const postSlicer = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setPostDetails: (state, action) => {
      state.postDetails = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export const { setPosts, setPostDetails, setSearchResults } =
  postSlicer.actions;

export default postSlicer.reducer;
