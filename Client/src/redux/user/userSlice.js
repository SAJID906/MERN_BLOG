import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createUser: null,
  error: null,
 
};
const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    SignInStart: (state) => {
      
      state.error = null
    },
    SignInSuccess: (state, action) => {
        state.createUser = action.payload
        state.loading = false
        state.error = null
      },
      SignInFailur:(state,action)=>{
        state.error=action.payload
       
      }
     
     
  }
});
export const {SignInStart,SignInSuccess,SignInFailur}=userSlice.actions
export default userSlice.reducer