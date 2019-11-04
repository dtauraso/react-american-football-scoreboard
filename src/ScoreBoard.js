import React from "react";
import "./App.css"

const ScoreBoard = (props) => {
    return (
        <div className={props.teamClass}>
            <h2 className={props.teamNameClass}>{props.teamName}</h2>
            <div className={props.teamScoreClass}>{props.teamScore}</div>
        </div>
    );


}
export default ScoreBoard;