import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
    return (
        <nav>
            <Link to="/Home">ホーム</Link>
            <Link to="/createpost">お金を立て替える</Link>
            <Link to="/person">人物一覧</Link>
            <Link to="/createperson">人の追加</Link>
        </nav>
    )
}

export default Navbar;