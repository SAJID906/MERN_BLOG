import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createUser: null,
  error: null,
 
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SignInStart: (state) => {
      
      state.error = null
    },
    SignInSuccess: (state, action) => {
      console.log(state)
        state.createUser = action.payload
       
        state.error = null
        // localStorage.setItem("UserLogin",JSON.stringify(state.createUser.user))
      },
      SignInFailur:(state,action)=>{
        state.error=action.payload
       
      }
     
     
  }
});
export const {SignInStart,SignInSuccess,SignInFailur}=userSlice.actions
export default userSlice.reducer