import { Link } from "react-router-dom";
function Navbar({ what }) {
    return (
        <nav>
            <section>
                <h1>صفحه {what}</h1>
                <div className="navContent">
                    <div className="navLinks">
                        <Link to="/posts" dideo-checked="true">پست‌ها</Link>
                        <Link to="/users" dideo-checked="true">کاربران</Link>
                    </div>
                </div>
            </section>
        </nav>
    );
}

export default Navbar;