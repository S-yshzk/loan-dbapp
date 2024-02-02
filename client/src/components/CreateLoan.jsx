import InputDate from './inputDate';
const CreateLoan = () => {
    return (
        <div className="columns">
            <div className="column is-one-third">
                <form className="box">
                    <div className="field">
                        <label className="label">時間</label>
                        <div className="control">
                            <InputDate />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">情報</label>
                        <div className="control">
                            <textarea className="textarea" placeholder="場所,etc)"></textarea>
                        </div>
                    </div>
                    <div className="box has-background-warning-light">
                        <div className="field">
                            <label className="label">名前</label>
                            <div className="control">
                                <input className="input" type="email" placeholder="名前" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">金額</label>
                            <div className="control">
                                <input className="input" type="email" placeholder="金額" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">返済予定日</label>
                            <div className="control">
                                <input className="input" type="email" placeholder="返済予定日" />
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
