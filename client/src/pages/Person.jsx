import { useState, useEffect } from "react";
import { getPerson } from "../api";
import Navbar from "../components/Navbar";
const Person = () => {
    const [personData, setPersonData] = useState([]);
    useEffect(() => {
        getPerson()
        .then((res) => setPersonData(res))
        .then(console.log(personData));
    }, [])
    return(
        <div>
            <Navbar/>
            <h1>人物一覧</h1>
            {personData.map((item, index) => {
                return(
                    <li key={index}>{item.名前}</li>
                )
            })}
        </div>
    )
}

export default Person;