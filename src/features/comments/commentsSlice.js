import { createSlice } from "@reduxjs/toolkit";


const initState = {
    "0": {
        "id": 1,
        "comment": "خوشم اومد لطفا هرچه زودتر بخش ثبت نام رو اضافه کنین",
        "user": "یاسمن ",
        "date": 1667287453123
    },
    "1": {
        "id": 2,
        "comment": "وبلاگتون عالیه خیلی از پستاتون خلاصه و مفید هستن",
        "user": "محمد ",
        "date": 1661890413454
    },
    "2": {
        "id": 3,
        "comment": "مرسی از وبلاگتون، کاش میتونستیم برای هر پست کامنت هارو ببینیم و اضافه بکنیم",
        "user": "آریا",
        "date": 1668929053123
    },
    "3": {
        "id": 4,
        "comment": "سلام خسته نباشید لطفا خبرهارو تا اونجایی که براتون مقدوره زودتر پوشش بدین",
        "user": "ساحل بخاری",
        "date": 1669220413454
    },
    "4": {
        "id": 5,
        "comment": "سلام لطفا مطالب رو آپدیت کنین",
        "user": "ارشیا",
        "date": 1659899413454
    },
    "5": {
        "id": 6,
        "comment": "سلام خیلی ممنونم از زحماتتون بابت این وبلاگ مناسبی که دارین و خبرهارو پوشش میدین",
        "user": "آوا قاضی",
        "date": 1668151453123
    },
    "6": {
        "id": 7,
        "comment": "سلام وقتتون بخیر لطفا موضوعات خبری بیشتری رو پوشش بدین",
        "user": "منوچهر عارف",
        "date": 1668583453321
    },
    "7": {
        "id": 8,
        "comment": "سلام لطفا اخبار ورزشی رو هم دنبال کنین",
        "user": "پیمان",
        "date": 1663309453468
    }
}

var ks = Object.values(initState).sort((a, b) => { return b.date - a.date })



const commentSlice = createSlice({
    name: "comments",
    initialState: Object.assign({}, ks),
    reducers: {}
})



export default commentSlice.reducer