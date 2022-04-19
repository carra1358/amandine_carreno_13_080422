import {createSlice } from '@reduxjs/toolkit'

/* eslint no-param-reassign: ["error", { "props": false }] */

const userSlices = createSlice({
    name: "user",
    initialState:{
        isLogin : false,
        userAuth: {},
        userData: {}
        
    },
    
    reducers:{
    userLogInAction: (state,action) => {
     state.userAuth = action.payload
     state.isLogin = true 
    },
    userDataAction : (state, action) => {
     state.userData = action.payload
    },
    userLogoutAction : (state) => {
        state.isLogin = false
        state.userData = {}
        state.userAuth = {
            
          }
     
    }
     
    }
    
})

export const { userLogInAction, userDataAction, userLogoutAction} = userSlices.actions;
export default userSlices.reducer;