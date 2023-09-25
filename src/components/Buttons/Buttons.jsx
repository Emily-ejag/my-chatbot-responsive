import React from "react";

import './Buttons.css';

const MainButtons = () => {
    return <div className="buttons">
        <div className="buttons-container">
            <div className="row-button">
                <div className="col-button"><p>  <i className="fa fa-pencil"></i>     Design an Event</p></div>
                <div className="col-button"><p>  <i className="fa fa-calendar"></i>     Booking a venue</p></div>
                <div className="col-button"><p>  <i className="fa fa-users"></i>     Managing Guests</p></div>
                <div className="col-button"><p>  <i className="fa fa-suitcase"></i>     Finding Lead</p></div>
                <div className="col-button"><p>  <i className="fa fa-line-chart"></i>     Tracking ROI</p></div>
            </div>
        </div>
    </div>
}

export default MainButtons;