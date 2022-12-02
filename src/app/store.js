import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "../features/posts/PostSlice";
import UsersSlice from "../features/users/UsersSlice";
import commentsSlice from "../features/comments/commentsSlice";


const store = configureStore({
    reducer: {
        'posts': PostSlice,
        'users': UsersSlice,
        "comments": commentsSlice
    }
})

export default store;