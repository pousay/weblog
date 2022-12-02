import { createSlice } from "@reduxjs/toolkit";


let initState = {
    0: {
        "id": 0,
        "firstName": "نازنین ",
        "lastName": "تابش"
    },
    1: {
        "id": 1,
        "firstName": "لاله ",
        "lastName": "معارف"
    },
    2: {
        "id": 2,
        "firstName": "سامان",
        "lastName": "شاهی"
    },
    3: {
        "id": 3,
        "firstName": "ارشیا",
        "lastName": "احمدی"
    },
    4: {
        "id": 4,
        "firstName": "امیر",
        "lastName": "خاتمی"
    }
}



const usersSlice = createSlice({
    name: "users",
    initialState: initState,
    reducers: {}
})

export default usersSlice.reducer