import { createSlice } from "@reduxjs/toolkit";

interface User {
    firstName: string;
    lastName: number;
    emailId: String;
  }

const userReducer = createSlice({
    name: "users",
    initialState: {
        users: []
    },
    reducers:{
        getUser: (state, action) => {
            state.users = action.payload.map((user: User) => {
                return {firstName: user.firstName, lastName: user.lastName, emailId: user.emailId}
            })

        },
        addUser: (state, action) =>{
             {/*// @ts-ignore */}
            state.users.push(action.payload)
        } 
    }
});

export const { getUser, addUser } = userReducer.actions;
export default userReducer.reducer;