import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "./../../features/users/UsersSlice"
import { addNewPost } from "./../../features/posts/PostSlice"

function AddPost() {
    const dispatch = useDispatch()
    const [Title, setTitle] = useState('');
    const [UserId, setUserId] = useState('');
    const [Content, setContent] = useState('');
    const [status, setstatus] = useState("idle");

    const users = useSelector(selectUsers);
    let AllUsers;
    if (users.length > 0) {
        AllUsers = users.map(user => <option key={user.id} value={user.id}>{user.firstName + " " + user.lastName}</option>)
    }

    const canSave = () => {
        return [Title, UserId, Content].every(Boolean) && status === "idle"
    }

    const vibrator = () => {
        if (Content.length >= 1400) {
            navigator.vibrate([200])
        }
    }

    const OnSave = async () => {

        var currentdate = new Date();
        var date = currentdate.getDay() + "/" + currentdate.getMonth()
            + "/" + currentdate.getFullYear() + " @ "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":" + currentdate.getSeconds();

        setstatus('pending')
        await dispatch(addNewPost({ title: Title, content: Content, user: Number(UserId), date }));
        // await dispatch(saveNewPost(Content, Title, UserId))
        setstatus('idle')
        setTitle('')
        setContent('')
        setUserId('')

    }

    return (
        <section>
            <h2>افزودن پست جدید</h2>
            <form className="add-post">
                <label htmlFor="postTitle">موضوع پست: </label>
                <input className="addPostTitle" value={Title} onChange={(e) => {
                    setTitle(e.target.value);

                }} type="text" id="postTitle" name="postTitle" placeholder="موضوع: مانند جام جهانی" />
                <label htmlFor="postAuthor">نویسنده:</label>
                <select id="postAuthor" value={UserId} onChange={(e) => {
                    setUserId(e.target.value)
                }}>
                    <option value="">انتخاب کنید</option>
                    {AllUsers}

                </select>
                <label htmlFor="postContent">متن:</label>
                <textarea maxLength={1400} placeholder="..." value={Content} onChange={(e) => {
                    setContent(e.target.value);
                    vibrator()
                }} id="postContent" name="postContent"></textarea>
                <p id="count-result">مجموع حروف : <span className={Content.length >= 1400 ? "red" : "green"}>{Content.length}/1400</span></p>
                <button className="button" onClick={OnSave} type="button" disabled={!canSave()}>
                    افزودن پست
                </button>
            </form>
        </section>
    );
}

export default AddPost;