import { useEffect, useState } from "react";
import { getPerson, getLoan } from "../api";
import "../styles/LoanList.css";
const LoanList = () => {
    const [laon, setLoan] = useState([]);
    const [person, setPerson] = useState([]);
    useEffect(() => {
        (async () => {
            const res1 = await getLoan();
            setLoan(res1);
            console.log(res1);
            const res2 = await getPerson();
            setPerson(res2);
            console.log(res2);
        })()
    }, [])
    const displayDate = (date) => {
        const dateObject = new Date(date);
        const formattedDate = dateObject.toDateString();
        return formattedDate;
    }
    return (
        <div>
            <h1>立て替え一覧</h1>
            <table>
                <thead>
                    <tr>
                        <th scope="col">日付</th>
                        <th scope="col">情報</th>
                        <th scope="col">名前</th>
                        <th scope="col">金額</th>
                        <th scope="col">返済予定日</th>
                        <th scope="col">返済状態</th>
                    </tr>
                </thead>
                <tbody>
                    {laon.map((item, index) => {
                        return(
                            <tr key={index}>
                                <td >{displayDate(item.立て替え日)}</td>
                                <td >{item.立て替え情報}</td>
                                <td>{}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default LoanList;