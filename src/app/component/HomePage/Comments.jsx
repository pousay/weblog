import EachComment from "./EachComment";

function Comments() {
    return (
        <>

            <div className="container mt-5 pb-5">

                <div className="d-flex justify-content-center ">
                    <div className="text-center">
                        <p className="display-6 text-break lead mt-5 pt-3 mb-5">نظرات و سوالات شما</p>
                    </div>
                </div>

                <EachComment />
            </div>
        </>
    );
}

export default Comments;