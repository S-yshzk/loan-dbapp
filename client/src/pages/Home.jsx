import Navbar from "../components/Navbar";
import 'bulma/css/bulma.css';
import CreateLoan from "../components/CreateLoan";
import BlackList from "../components/BlackList";
const Home = () => {
    return (
        <div>
            <Navbar/>
            <CreateLoan /> 
            <BlackList />   
        </div>
    )
}

export default Home;