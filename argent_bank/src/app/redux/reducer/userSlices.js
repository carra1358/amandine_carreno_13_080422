import {createSlice } from '@reduxjs/toolkit'

/* eslint no-param-reassign: ["error", { "props": false }] */

const userSlices = createSlice({
    name: "user",
    initialState:{
        isLogin : false,
        userAuth: {
            "status": null,
            "message": "",
            "body": {
              "token": ""
            }
          },
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
            "status": null,
            "message": "",
            "body": {
              "token": ""
            }
          }
     
    }
     
    }
    
})

export const { userLogInAction, userDataAction, userLogoutAction} = userSlices.actions;
export default userSlices.reducer;