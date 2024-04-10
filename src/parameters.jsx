export const Parameters = () => {
    return (
        <div className="form-container">
            <form action="">
                <div className="day-input">
                <label htmlFor="day"> Day</label><br />
                <input type="text" id="day" name="day" placeholder="DD"/>
                </div>
                <div className="month-input">
                <label htmlFor="month"> Month</label><br />
                <input type="text" id="month" name="month" placeholder="MM"/>
                </div>
                <div className="year-input">
                <label htmlFor="year"> Year</label><br />
                <input type="text" id="year" name="year" placeholder="YYYY"/>
                </div>
            </form>
            <p id="error">Must be a valid date</p>
        </div>
    )
}   

export const LineBreak = () => {
    return (
        <>
        <div className="linebreak">
            <hr />
            <img src="./images/icon-arrow.svg" alt="arrow down" className="arrow-icon"/>
        </div>
        </>
    );
}