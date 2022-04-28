import { createSlice } from '@reduxjs/toolkit'


// redux slice: englobe innitial state and reducers and generate actions automatically
const userSlices = createSlice({

    name: "user",

    initialState: {
        isLogin: false,
        userAuth: {
            token: null
        },
        userData: {
            email: null,
            firstName: null,
            lastName: null,
            id: null,
        },
        userPath: null

    },

    reducers: {

        // Updates user authorisation and status
        userLogInAction: (state, action) => {
            state.userAuth = action.payload
            state.isLogin = true
        },
        // Updates user informations
        userDataAction: (state, action) => {
            state.userData = action.payload
        },
        // Clear user returns initial state
        userLogoutAction: (state) => {
            state.isLogin = false
            state.userData = {
                email: null,
                firstName: null,
                lastName: null,
                id: null,

            }
            state.userAuth = {
                token: null
            }
        },
        // store and updates account id from mooked data to find data to load for each account created
        findAccountAction: (state, action) => {
            state.userPath = action.payload
        }

    }

})

export const { userLogInAction, userDataAction, userLogoutAction, findAccountAction } = userSlices.actions;
export default userSlices.reducer;