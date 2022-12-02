import Navbar from "./app/component/Navbar"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./index.css"
import PostsList from "./app/component/PostsList";
import UsersList from "./app/component/UsersList";
import EachUser from "./app/component/EachUser";
import EachPost from "./app/component/EachPost";
import Footer from "./app/component/footer";
import Btt from "./app/component/btt";
import HomePage from "./app/component/HomePage/HomePage";

function App() {

    return (
        <>
            <BrowserRouter>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<HomePage />}></Route>
                        <Route path="/posts" element={<><Btt /> <Navbar what={"پست‌ها"} /><PostsList /></>}></Route>
                        <Route path="/users" element={<><Navbar what={"کاربران"} /><UsersList /></>}></Route>
                        <Route path="/users/:id" element={<><Navbar what={"کاربران"} /><EachUser /></>}></Route>
                        <Route path="/posts/:id" element={<><Navbar what={"پست ها"} /><EachPost /></>}></Route>
                        <Route path="*" element={<Navigate to="/" replace />}></Route>
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;