import { useState } from "react";
import { Link } from "react-router-dom";

function HpNavbar() {
    const [ClassN, setClassN] = useState("collapse navbar-collapse");
    return (
        <>
            {/* <nav className="navbar  sticky-top">
                <button className="toggle-button" onClick={() => { !ClassN.includes("active") ? setClassN("navbar-links active") : setClassN("navbar-links") }}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <div className={ClassN}>
                    <ul>
                        <li><Link to="/">صفحه اصلی</Link></li>
                        <li><Link to="/posts">صفحه پست ها</Link></li>
                        <li><Link to="/users">صفحه کاربران</Link></li>
                    </ul>
                </div>
            </nav> */}

            <nav dir="ltr" className="navbar navbar-expand-md navbar-light back-yellow d-flex justify-content-start justify-content-md-center">
                <button onClick={() => ClassN.includes("show") ? setClassN("collapse navbar-collapse w-100") : setClassN("collapse navbar-collapse w-100 show")} className="navbar-toggler border border-2 border-dark" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={ClassN} id="navbarText">
                    <ul dir="rtl" className="navbar-nav mr-auto container-fluid d-flex justify-content-center navbar-links">

                        <li className="nav-item mt-4 mt-md-0 loaded-page"><Link to="/">صفحه اصلی</Link></li>

                        <li className="nav-item"><Link to="/posts">صفحه پست ها</Link></li>

                        <li className="nav-item"><Link to="/users">صفحه کاربران</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default HpNavbar;