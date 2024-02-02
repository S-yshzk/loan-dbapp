import { getPersonCount, postPerson } from "../api";
import { useState, useEffect } from "react";

async function getCount() {
    const res = await getPersonCount();
    return res;
}

const PersonForm = () => {
    const [count, setCount ] = useState({});
    useEffect(() => {
        getPersonCount()
        .then((res) => setCount(res))
        .then(console.log(count))
    }, [])
    return (
        <div style={{ padding: "10px" }}>
            <form
                onSubmit={async (event) => {
                    event.preventDefault();
                    const res = await postPerson({
                        名前: event.target.elements.name.value,
                        人物情報: event.target.elements.info.value
                    });
                    setCount(res);
                    console.log(count);
                }}
            >
                <div className="field column">
                    <label className="label">名前</label>
                    <div className="control has-icons-left has-icons-right">
                        <input name="name" className="input is-success" type="text" placeholder="Text input" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">情報</label>
                    <div className="control">
                        <textarea name="info" className="textarea" type="text" placeholder="部活の友達など" />
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
    )
}

export default PersonForm;