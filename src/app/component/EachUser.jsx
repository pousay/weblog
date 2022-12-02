import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

function EachUser() {
    const { id } = useParams()

    const navigate = useNavigate()

    const allPosts = useSelector(state => state.posts)
    const posts = Object.values(allPosts).filter(post => Number(post.user) === Number(id))
    const PostsElm = posts.length > 0 ? posts.map(post =>
        <li key={post.id}>
            <Link to={`/posts/${post.id}`} dideo-checked="true">{post.title}</Link>
        </li>)
        : <p>این کاربر هیچ پستی ندارد</p>

    const users = useSelector(state => state.users)
    const user = Object.values(users).filter(user => Number(user.id) === Number(id))[0]


    try {
        return (
            <>
                <section>
                    <h2>{user.firstName} {user.lastName}</h2>
                    <ol>
                        {PostsElm}
                    </ol>
                    < button onClick={() => {
                        navigate(-1)
                    }
                    } style={{ borderRadius: "5px", color: "white", marginTop: "40px", marginBottom: "40px" }} className="button muted-button" > برگشت</button >
                </section>
            </>
        );
    }
    catch {
        return (
            <>
                <section style={{ height: "300px" }}>
                    <div className="loader"></div>
                </section>
            </>
        )
    }
}

export default EachUser;