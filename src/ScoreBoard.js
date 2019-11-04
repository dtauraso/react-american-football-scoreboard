import React from "react";
import "./App.css"

const ScoreBoard = (teamClass,
                    teamNameClass,
                    teamName,
                    teamScoreClass,
                    teamScore) => {
    return (
        <div className={teamClass}>
            <h2 className={teamNameClass}>{teamName}</h2>
            <div className={teamScoreClass}>{teamScore}</div>
        </div>
    );


}
export default ScoreBoard;