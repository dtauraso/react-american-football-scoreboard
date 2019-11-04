import React from "react"
import "./App.css"

const GameStats = (props) => {

    return (
        <div className={props.statsKind}>
            <h3 className={props.statsTitleClass}>{props.statsTitle}</h3>
            <div className={props.statsValueClass}>{props.statsValue}</div>
        </div>

    );
}

export default GameStats;