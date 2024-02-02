import { useEffect, useState } from "react";
import { getPerson, getLoan, postCheck } from "../api";
import "../styles/LoanList.css";
import Navbar from "../components/Navbar";
const LoanList = () => {
    const [loan, setLoan] = useState([]);
    useEffect(() => {
        (async () => {
            const res1 = await getLoan();
            setLoan(res1);
            console.log(res1);
        })()
    }, [])
    const displayDate = (date) => {
        const dateObject = new Date(date);
        const formattedDate = dateObject.toDateString();
        return formattedDate;
    }

    return (
        <div>
            <Navbar />
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
                    {loan.map((item, index) => {
                        console.log(name)
                        return (
                            <tr key={index}>
                                <td >{displayDate(item.立て替え日)}</td>
                                <td >{item.立て替え情報}</td>
                                <td>{item.名前}</td>
                                <td>{item.立て替え金額}円</td>

                                <td>{displayDate(item.返済予定日)}</td>
                                {item.返済済み ? <td style={{ backgroundColor: "green" }}>完済<input　style={{verticalAlign: "middle"}} type="checkbox" checked onChange={async () => {
                                    console.log( {"立て替えID": item.立て替えID, "返済状態":!(item.返済済み)})
                                    const res = postCheck({ "立て替えID": item.立て替えID, "返済状態":!(item.返済済み)})

                                }} /></td> : <td style={{ backgroundColor: "red" }}>未納<input style={{verticalAlign: "middle"}} type="checkbox" onChange={async () => {
                                    const res = postCheck({ "立て替えID": item.立て替えID, "返済状態":!(item.返済済み)
                                })
                                }} /></td>}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default LoanList;