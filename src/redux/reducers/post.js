import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    postDetails: null,
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
    },
  });
  
  // setPosts and setPostDetails dapat di segala project ini
  export const { setPosts, setPostDetails } = postSlicer.actions;
  
  // mengekspor reducers/state global
  export default postSlicer.reducer;