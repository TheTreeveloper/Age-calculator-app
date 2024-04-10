import React, { useEffect, useState } from "react";

export const Parameters = () => {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    // const [errorColor, setErrorColor] = useState('hsl(0, 1%, 44%)');

    const handleClick = () => {
        if (day === "" || month === "" || year === "") {
            setShowError(true);
            setErrorMessage("This field is required");
        } else {
            setShowError(false);
            setErrorMessage("");
        }
    }


    return (
        <div className="form-container">
            <form action="">
                <div className="day-input">
                <label htmlFor="day" className={showError ? 'errorColorChange' : ''}> Day</label><br />
                <input type="text" id="day" name="day" placeholder="DD" value={day} onChange={(e) => setDay(e.target.value)}/>
                </div>
                <div className="month-input">
                <label htmlFor="month"> Month</label><br />
                <input type="text" id="month" name="month" placeholder="MM" value={month} onChange={(e) => setMonth(e.target.value)}/>
                </div>
                <div className="year-input">
                <label htmlFor="year"> Year</label><br />
                <input type="text" id="year" name="year" placeholder="YYYY" value={year} onChange={(e) => setYear(e.target.value)}/>
                </div>
            </form>
            <div id="errorHandler">
                {showError && <p id="error" className="error">{errorMessage}</p>}
                {showError && <p id="error" className="errorMonth">{errorMessage}</p>}
                {showError && <p id="error" className="errorYear">{errorMessage}</p>}
            </div>
            <div className="linebreak">
            <hr />
                        <img src="./images/icon-arrow.svg" alt="arrow down" id="arrow-button" onClick={handleClick}/>
            </div>
        </div>
    )
}   