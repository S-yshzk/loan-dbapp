import Navbar from "../components/Navbar";
import 'bulma/css/bulma.css';
import CreateLoan from "../components/CreateLoan";
const Home = () => {
    return (
        <div>
            <Navbar/>
            <CreateLoan />        
        </div>
    )
}

export default Home;