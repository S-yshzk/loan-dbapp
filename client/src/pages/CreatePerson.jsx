import Navbar from "../components/Navbar";
import 'bulma/css/bulma.css';
import PersonForm from "../components/PersonForm";
const CreatePerson = () => {
    return (
        <div>
            <Navbar/>
            <h1>人の新規追加</h1>
            <PersonForm/>
        </div>
    )
}

export default CreatePerson;