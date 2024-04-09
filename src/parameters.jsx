export const Parameters = () => {
    return (
        <div>
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
        </div>
    )
}   

export const LineBreak = () => {
    return (
        <>
        <hr />
        <img src="../public/images/icon-arrow.svg" alt="" />
        </>
    );
}