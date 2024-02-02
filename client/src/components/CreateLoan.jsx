import { useState, useEffect } from 'react';
import InputDate from './inputDate';
import dayjs from 'dayjs';
import { postLoan, getPerson } from '../api';
const CreateLoan = () => {
    const [date, setDate] = useState(dayjs());
    const [repayDate, setRepayDate] = useState(dayjs());
    const [name, setName] = useState("");
    const [nameid, setNameid] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [info, setInfo] = useState("");
    const [price, setPrice] = useState(0);
    const [data, setData] = useState([]);
    useEffect(() => {
        (async () => {
            const response = await getPerson();
            setData(response);
        })();
    }, [])
    useEffect(() => {
        // console.log(data.filter(item => item[名前].includes(name)));
        name !== ""　&& data.length > 0 ? setSuggestions(data.filter(item => item["名前"].includes(name))) : setSuggestions([]);
    }, [name]);
    
    return (
        <div className="columns" style={{ padding: "30px" }}>
            <div className="column is-one-third">
                <form className="box"
                    onSubmit={async (event) => {
                        event.preventDefault();
                        if (data.some(obj => obj["名前"] === name)) {
                            const loan = {
                                "date": date.format("YYYY-MM-DD"),
                                "info": info,
                                "人物id": nameid,
                                "price": price,
                                "repayDate": repayDate.format("YYYY-MM-DD")
                            }
                            const res = await postLoan(loan);
                            console.log(loan);
                        } else {
                            alert("対象の人物がいません、新規人物の場合は「人の追加」で追加してください")
                        }
                    }} >
                    <div className="field">
                        <label className="label">時間</label>
                        <div className="control">
                            <InputDate date={date} setDate={setDate} />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">情報</label>
                        <div className="control">
                            <textarea className="textarea" placeholder="場所,etc)" value={info} onChange={(e) => setInfo(e.target.value)}></textarea>
                        </div>
                    </div>
                    <div className="box has-background-warning-light">
                        <div className="field has">
                            <label className="label">名前</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="名前" value={name} onChange={(e) => setName(e.target.value)} />
                                {suggestions.length > 0 &&
                                    <select multiple size="3">
                                        {suggestions.map((suggestion, index) => (
                                            <option key={index} onClick={() => {
                                                setName(suggestion["名前"])
                                                setNameid(suggestion["人物id"]);
                                                setSuggestions([]);
                                            }}
                                            >{suggestion["名前"]}</option>
                                        ))}
                                    </select>}
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">金額</label>
                            <div className="control">
                                <input className="input" type="number" placeholder="金額" value={price} onChange={(e) => setPrice(e.target.value)} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">返済予定日</label>
                            <div className="control">
                                <InputDate date={repayDate} setDate={setRepayDate} />
                            </div>
                        </div>
                    </div>
                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-link">Submit</button>
                        </div>
                        <div className="control">
                            <button className="button is-link is-light">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default CreateLoan;
