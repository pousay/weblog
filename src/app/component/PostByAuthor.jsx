import { useSelector } from "react-redux";

function PostAuthor({ userId, showFN }) {

    const users = useSelector(state => state.users)
    const user = Object.values(users).filter(user => Number(user.id) === Number(userId))[0]

    let text;
    if (showFN) {
        text = <span>توسط {Object.keys(user).includes("firstName") && Object.keys(user).includes("lastName") ? user.firstName + " " + user.lastName : "Unknown"}</span>
    }
    else {
        text = <span>توسط {Object.keys(user).includes("firstName") && Object.keys(user).includes("lastName") ? user.lastName : "Unknown"}</span>
    }

    return (
        <div>
            {text}
        </div>
    );
}

export default PostAuthor;