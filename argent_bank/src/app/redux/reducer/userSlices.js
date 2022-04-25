import {createSlice } from '@reduxjs/toolkit'

/* eslint no-param-reassign: ["error", { "props": false }] */

const userSlices = createSlice({
    name: "user",
    initialState:{
        isLogin : false,
        userAuth: {},
        userData: {
              email: null,
              firstName: null,
              lastName: null,
              id: null,
        },
        userPath: null
        
    },
    
    reducers:{
    userLogInAction: (state,action) => {
     state.userAuth = action.payload
     state.isLogin = true 
    },
    userDataAction : (state, action) => {
     state.userData = action.payload
    },
    userEditFirstName : (state,action) => {
        state.userData.firstName = action.payload
    }, userEditLastName : (state,action) => {
        state.userData.lastName = action.payload
    },
    userLogoutAction : (state) => {
        state.isLogin = false
        state.userData = {
            email: null,
            firstName: null,
            lastName: null,
            id: null,

        }
        state.userAuth = {
            
          }
     
    },
    userPathAction : (state,action) => {
       state.userPath = action.payload
    }
     
    }
    
})

export const { userLogInAction, userDataAction, userLogoutAction, userPathAction} = userSlices.actions;
export default userSlices.reducer;