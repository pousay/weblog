
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import PostTime from "./PostTime"
import PostAuthor from "./PostByAuthor"

function EachPost() {
    const { id } = useParams()
    const posts = useSelector(state => state.posts)
    const post = Object.values(posts).filter(post => Number(post.id) === Number(id))[0]
    const navigate = useNavigate()

    try {
        return (
            <>
                <section>
                    <article className="post">
                        <h2>{post.title}</h2>
                        <div className="extra" style={{ margin: "10px 0px 30px 0px" }}>
                            <PostAuthor showFN={true} userId={post.user} />

                            <PostTime date={post.date} />

                        </div>

                        <p style={{ lineHeight: "25px", width: "90%" }} className="fs post-content">{post.content}</p>

                        <button onClick={() => {
                            navigate(-1)
                        }} style={{ borderRadius: "5px", color: "white", marginTop: "40px", marginBottom: "60px" }} className="button muted-button">برگشت</button>

                    </article>
                </section>
            </>
        );
    }
    catch {
        return (
            <>
                <section style={{ height: "350px" }}>
                    <p>مشکلی در پیدا کردن پست مورد نظر رخ داده است</p>
                </section>
            </>
        );
    }
}

export default EachPost;