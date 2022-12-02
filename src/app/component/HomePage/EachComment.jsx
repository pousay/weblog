import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PostTime from "../PostTime";
import Questions from "./ques";

function EachComment() {
    const comments = useSelector(state => state.comments)
    const [d, setData] = useState("");
    const [Count, setCount] = useState(3);


    useEffect(() => {
        setData(comments)
    }, []);



    const Data = Object.values(d).slice(0, Count)

    const comElm = Data.map(com => (
        <div key={com.id} className="card each-comment" style={{ width: "90%" }} dir="rtl">
            <div className="card-body p-0">
                <span className="card-title">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                    </svg>
                    {com.user}
                </span>

                <span style={{ opacity: "0.8" }}>
                    <PostTime date={com.date} />
                </span>
                <p className="text-wrap mt-2">{com.comment}</p>
            </div>
        </div>))

    return (
        <div className="comments-div row">


            <div className="col-12 col-md-6">
                <h2 className="text-end me-5 h2">نظرات ({Object.keys(d).length})</h2>
                {comElm}
                <button hidden={Object.keys(d).length <= Data.length} style={{ marginBottom: "20px", borderRadius: "5px", marginRight: "0px" }} className="button muted-button" onClick={() => setCount(count => count + 3)}>
                    دیدن بیشتر
                </button>
                <button hidden={Object.keys(d).length !== Data.length} style={{ marginBottom: "20px", borderRadius: "5px", marginRight: "0px" }} className="button muted-button" onClick={() => setCount(3)}>
                    بستن
                </button>
            </div>

            <div dir="rtl" className="col-12 col-md-6">
                <Questions />
            </div>

        </div >
    );
}

export default EachComment;