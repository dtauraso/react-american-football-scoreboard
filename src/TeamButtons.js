import React from "react";
import "./App.css"

const TeamButtons = (props) => {

    return (

        <div className={props.teamNameButtons}>
            <button className={props.teamTouchdownClass} onClick={props.setTeamTouchdownScore}>{props.teamTouchdown}</button>
            <button className={props.teamFieldGoalClass} onClick={props.setTeamFieldGoalScore}>{props.teamFieldGoal}</button>

        </div>
    );
}

export default TeamButtons;