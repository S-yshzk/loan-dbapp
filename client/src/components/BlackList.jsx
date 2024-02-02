import { useEffect, useState } from "react";
import { getLoan } from "../api";
import dayjs from "dayjs";

const BlackList = () => {
    const [data, setData] = useState();
    const currentDate = dayjs();
    console.log(currentDate);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getLoan();
                setData(res);
            } catch (error) {
                console.error("データの取得に失敗しました:", error);
            }
        };

        fetchData();
    }, []);

    const newData = data && data.filter(item => {
        const repaymentDate = dayjs(item.返済予定日);
        return repaymentDate.isBefore(currentDate);
    });

    return (
        <div style={{ position: "absolute", left: "600px", top: "100px" }}>
            <h1>返済予定日が過ぎた貸出</h1>
            <table>
                {newData &&
                    <thead>
                        <tr>
                            <td>情報</td>
                            <td>名前</td>
                            <td>立て替え日</td>
                            <td>返済予定日</td>


                        </tr>
                    </thead>}
                <tbody>

                    {newData && newData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.立て替え情報}</td>
                            <td>{item.名前},</td>
                            <td>{item.立て替え日}</td>
                            <td>{item.返済予定日}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BlackList;
