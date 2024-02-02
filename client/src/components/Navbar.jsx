import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
    return (
        <nav>
            <Link to="/">ホーム</Link>
            <Link to="/loan">立て替え一覧</Link>
            <Link to="/person">人物一覧</Link>
            <Link to="/createperson">人の追加</Link>
        </nav>
    )
}

export default Navbar;