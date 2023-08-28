// src/features/userSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userRegister } from "@epics";
import { STATE } from "@helpers";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    state: STATE.IDEL,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.state = STATE.LOADING;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.state = STATE.SUCCESSED;

        state.data = action.payload;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.state = STATE.FAILED;

        state.error = action.error?.message ?? "";
      })
      .addCase(userRegister.pending, (state) => {
        state.state = STATE.LOADING;
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.state = STATE.SUCCESSED;
        state.data = action.payload.user;
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.state = STATE.FAILED;

        state.error = action.error?.message ?? "";
      });
  },
});

export default userSlice.reducer;
