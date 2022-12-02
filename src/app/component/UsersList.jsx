import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function UsersList() {
    const users = useSelector(state => state.users);

    const UsersElm = Object.values(users).map(user => <li key={user.id}><Link to={`/users/${user.id}`} dideo-checked="true">{user.firstName} {user.lastName}</Link></li>)
    return (
        <>
            <section className="pb-4">
                <h2>کاربران</h2>
                <ol>
                    {UsersElm}
                </ol>
            </section>
        </>
    );
}

export default UsersList;