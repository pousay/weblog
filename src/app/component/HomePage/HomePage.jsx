import Comments from "./Comments";
import Introduce from "./Introduce";
import Meaning from "./Meaning";
import HpNavbar from "./Navbar";
import RecentPosts from "./RecentPosts";
import Btt from "./../btt";
function HomePage() {
  return (
    <>
      <HpNavbar />
      <div className="container mt-5">
        <Meaning />
      </div>
      <div className="container-fluid odd pb-5 mt-5">
        <div className="container mt-5">
          <Introduce />
        </div>
      </div>

      <div>
        <RecentPosts />
      </div>

      <div className="container-fluid odd">
        <Comments />
      </div>
      <Btt />
    </>
  );
}

export default HomePage;
