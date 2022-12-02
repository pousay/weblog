import PostAuthor from "./PostByAuthor"
import PostTime from "./PostTime"
import { Link } from "react-router-dom";
function Post({ post }) {
    return (
        <>
            <article className="post-excerpt">
                <h3>{post.title.length > 15 ? post.title.substring(0, 15) + "..." : post.title}</h3>
                <div>
                    <PostAuthor userId={post.user} />
                    <PostTime date={post.date} />

                </div>
                <p className="post-content">{post.content.length > 200 ? post.content.substring(0, 240) + "..." : post.content}</p> {/* getting 70 characters of the content */}

                <Link className="button muted-button" to={`/posts/${post.id}`} dideo-checked="true">مشاهده پست</Link>
            </article>
        </>
    );
}

export default Post;