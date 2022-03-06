import {createSlice, configureStore} from "@reduxjs/toolkit";
const authInitialState = {
  token : '',
  isLogin : false
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers : {
    loggedIn(state, action){
      state.isLogin = true;
      state.token = action.payload;
    },
    loggedOut(state){
      state.isLogin = false;
      state.token = '';
    }
  }
});

const store = configureStore({
  reducer: authSlice.reducer
})

export const authAction = authSlice.actions; 
export default store;