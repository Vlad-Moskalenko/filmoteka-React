import { createSlice } from "@reduxjs/toolkit";

import { getMovieReviews } from "redux/operations";
import { handleError } from "services/handleError";
import { handlePending } from "services/handlePending";

const movieReviewsSlice = createSlice({
  name: "movieReviews",

  initialState: {
    reviews: [],
    status: null,
  },

  extraReducers: builder => builder
  .addCase(getMovieReviews.pending, handlePending)

  .addCase(getMovieReviews.fulfilled, (state, {payload}) =>{
    state.reviews = payload.results
    state.status = 'success'
  })

  .addCase(getMovieReviews.rejected, handleError)
})

export const movieReviewsReducer = movieReviewsSlice.reducer
