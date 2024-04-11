import React, { useEffect, useState } from "react";

export const Parameters = () => {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const currentYear = new Date().getFullYear() - 1;
    const currentMonth = new Date().getMonth() + 1;
    const currentDay = new Date().getDate() + 1;
    
    const [ageInYears, setAgeInYears] = useState('- -');
    const [ageInMonths, setAgeInMonths] = useState(0);
    const [ageInDays, setAgeInDays] = useState(0);

    const handleClick = () => {
        if (day === "" || month === "" || year === "") {
            setShowError(true);
            setErrorMessage("This field is required");
        } else {
            setShowError(false);
            setErrorMessage("");
        }
    }

    const handleDayChange = (event) => {
        const {value} = event.target;
        setDay(value);

        if (value > 31){
            setShowError(true);
            setErrorMessage("Must be a valid date");
        } else {
            setShowError(false);
            setErrorMessage("");
        }
    }

    const handleMonthChange = (event) => {
        const {value} = event.target;
        setMonth(value);

        if (value > 12){
            setShowError(true);
            setErrorMessage("Must be a valid date");
        } else {
            setShowError(false);
            setErrorMessage("");
        }
    }

    const handleYearChange = (event) => {
        const {value} = event.target;
        setYear(value);

        if (value > 2024){
            setShowError(true);
            setErrorMessage("Must be a valid date");
        } else {
            setShowError(false);
            setErrorMessage("");
        }
    }

    useEffect(() => {
        let birthYear = year;
        let birthMonth = month;
        let birthDay = day;
        const ageInYears = currentYear - birthYear + " ";
        const ageInMonths = () => {
            if (birthMonth > currentMonth) {
                return (ageInYears - 1);
            } else if (birthMonth === currentMonth && birthDay > currentDay) {
                return ageInYears - 1;
            } else {
                return currentMonth - birthMonth + " ";
            }
        };
        const ageInDays = currentDay - birthDay + " ";

        setAgeInYears(ageInYears);
        setAgeInMonths(ageInMonths);
        setAgeInDays(ageInDays);
        
        console.log(ageInMonths)
    }, [year, month, day])
    
    

    return (
        <div className="form-container">
            <form action="">
                <div className="day-input">
                <label htmlFor="day" className={showError ? 'errorColorChange' : ''}> Day</label><br />
                <input type="text" 
                id="day" 
                name="day" 
                placeholder="DD" 
                className={showError ? 'errorBorderColor' : ''}
                value={day} 
                onChange={handleDayChange}
                // (e) => setDay(e.target.value)
                />
                </div>
                <div className="month-input">
                <label htmlFor="month" className={showError ? 'errorColorChange' : ''}> Month</label><br />
                <input type="text" 
                id="month" 
                name="month" 
                placeholder="MM" 
                className={showError ? 'errorBorderColor' : ''}
                value={month} 
                onChange={handleMonthChange}/>
                </div>
                <div className="year-input">
                <label htmlFor="year" className={showError ? 'errorColorChange' : ''}> Year</label><br />
                <input type="text" 
                id="year" 
                name="year" 
                placeholder="YYYY" 
                className={showError ? 'errorBorderColor' : ''}
                value={year} 
                onChange={handleYearChange}/>
                </div>
            </form>
            <div id="errorHandler">
                {showError && <p id="errorDay" className="error">{errorMessage}</p>}
                {showError && <p id="errorMonth" className="errorMonth">{errorMessage}</p>}
                {showError && <p id="errorYear" className="errorYear">{errorMessage}</p>}
            </div>
            <div className="linebreak">
            <hr />
                        <img src="./images/icon-arrow.svg" alt="arrow down" id="arrow-button" onClick={handleClick}/>
            </div>

        <div className="calculator">
            <p><span>{ageInYears}</span>years</p>
            <p><span>{ageInMonths}</span>months</p>
            <p><span>{ageInDays}</span>days</p>
        </div>
        </div>
    )
}   


// export const Calculator = () => {
    
//     return (
       
//     );
// }