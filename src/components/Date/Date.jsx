import React from "react";

import './Date.css';

const Date = (props) => {
    return <div className="dates">
        <p>Select a date:</p>
        <input className="date" type="date" id="appt" name="appt"/>
        <button className="button-date" onClick={props.actions.handleFinal}>Done</button>
    </div>
}


  export default Date;