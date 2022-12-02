import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PostTime from "../PostTime";

function RecentPosts() {

    const AllPosts = useSelector(state => state.posts);
    const posts = {
        0: AllPosts[0],
        1: AllPosts[1],
        2: AllPosts[2]
    }

    const postsElm = Object.values(posts).map(post => <div key={post.id} className="box">
        <div className="tent">
            <div className="iconn">
                <h3 className="h3">{post.title.substring(0, 33)}...</h3>
            </div>
            <span style={{ opacity: "0.7" }}>
                <PostTime date={post.date} />
            </span>
            <div className="text">

                <p>{post.content.substring(0, 100)}...</p>
            </div>
            <Link to={`/posts/${post.id}`}>مشاهده بیشتر</Link>
        </div>
    </div>)

    return (
        <>
            <div className="py-5 mt-5">
                <div className="container">
                    <div className="d-flex justify-content-center ">
                        <div className="text-center">
                            <p className="display-6 text-break lead">پست های اخیر</p>
                        </div>
                    </div>

                    <div className="body2">
                        <div className="cont">

                            {postsElm}

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RecentPosts;