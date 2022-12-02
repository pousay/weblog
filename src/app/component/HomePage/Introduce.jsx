import { Link } from "react-router-dom";

function Introduce() {
    return (
        <>
            <div className="row mt-3 g-4 col-reverse align-items-center ">

                <div className="col-md-6 col-12text-break">
                    <p className="display-4 lead mb-4">
                        <mark className="highlight">  وبلاگ</mark> ما
                    </p>
                    <p className="fs-6 mb-4" style={{ opacity: "0.7" }}>
                        وبلاگ ما، اخبار جدید یا اتفاقات و حوادث را شامل می‌شود و به صورت یک پست در دسترس کاربران قرار می‌گیرد. این پست‌ها می‌توانند شامل اتفاقات بسیار مهم باشند.

                    </p>

                    <div className="d-flex w-100 justify-content-center">
                        <Link style={{ color: "#f2f2f2" }} className="button muted-button" to="/posts" dideo-checked="true">رفتن به صفحه پست ها</Link>
                    </div>
                </div>


                <div className="col-md-6 col-12 d-flex mt-2 justify-content-start justify-content-md-center">
                    <img alt="picture2" src="https://s6.uupload.ir/files/pexels-picography-4458_mmfw.jpg" className="w-75 img" />
                </div>

            </div>
        </>

    );
}

export default Introduce;