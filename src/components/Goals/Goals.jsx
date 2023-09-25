import React from "react";

import './Goals.css';

const Goals = (props) => {
    return <div className="optionsss">
        {/* <p className="title">Select the goals for your plan:</p> */}
        <div className="optionss">
            <div className="col">
                <div className="row">
                    <label className="options-">
                        <input type="checkbox"
                        name="food"
                        id="e_breakfast"
                        value="breakfast"/> To reconnect
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="row">
                    <label className="options-">
                        <input type="checkbox"
                        name="food"
                        id="e_lunch"
                        value="lunch"/> Connect sales pipeline
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="row">
                    <label className="options-">
                        <input type="checkbox"
                        name="food"
                        id="e_dinner"
                        value="dinner"/> Group social activity
                        <span className="checkmark"></span>
                    </label>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <label className="options-">
                        <input type="checkbox"
                        name="food"
                        id="e_breakfast"
                        value="breakfast"/> Generate new leads
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="row">
                    <label className="options-">
                        <input type="checkbox"
                        name="food"
                        id="e_lunch"
                        value="lunch"/> Group integration
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="row">
                    <label className="options-">
                        <input type="checkbox"
                        name="food"
                        id="e_dinner"
                        value="dinner"/> All of the above
                        <span className="checkmark"></span>
                    </label>
                </div>
            </div>
        </div>
        <button className="planes" onClick={props.actions.handleAfterGoals}>Done</button>   
    </div>
}

export default Goals;