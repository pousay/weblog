import { useState } from "react";
import { useSelector } from "react-redux";
import Post from "./posts";

function PostsList() {
    const posts = useSelector(state => state.posts)
    const [Height, setHeight] = useState(true);
    const postIds = Object.values(posts)

    let content;
    if (postIds.length > 0) {
        content = postIds.map(post => <Post key={post.id} post={post} />)
        if (Height) {
            setHeight(false)
        }
    }
    else {
        content = <p>پستی وجود ندارد</p>
    }


    return (
        <>
            <section className={Height ? "posts-list relative h mb-5" : "posts-list relative mb-5"}>
                <h2>پست ها </h2>
                <div className="posts-div">
                    {content}
                </div>
            </section>
        </>
    );
}


export default PostsList;