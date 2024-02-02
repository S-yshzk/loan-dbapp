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
    return (
        <div>
            <Navbar />
            <h1>人物一覧</h1>
            <table>
                <thead>
                    <tr>
                        <th scope="col">名前</th>
                        <th scope="col">情報</th>
                    </tr>
                </thead>
                <tbody>
                    {personData.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.名前}</td>
                                <td>{item.人物情報}</td>

                            </tr>
                        )
                    })}
                </tbody>

            </table>
        </div>
    )
}

export default Person;