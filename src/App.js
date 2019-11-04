//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import ScoreBoard from "./ScoreBoard.js";
import TeamButtons from "./TeamButtons.js";
function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  let [homeScore, setHomeScore] = useState(0)
  let [otherScore, setOtherScore] = useState(0)

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">

          <ScoreBoard teamClass="home" teamNameClass="home__name" teamName="Lions" teamScoreClass="home__score" teamScore={homeScore} />
          {/* <div className="home"> */}

            {/* <h2 className="home__name">Lions</h2> */}

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            {/* <div className="home__score">{homeScore}</div> */}

          {/* </div> */}

          
          <div className="timer">00:03</div>
          <ScoreBoard teamClass="away" teamNameClass="away__name" teamName="Tigers" teamScoreClass="away__score" teamScore={otherScore} />
          {/* <div className="away"> */}
            {/* <h2 className="away__name">Tigers</h2> */}
            {/* <div className="away__score">{otherScore}</div> */}
          {/* </div> */}
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <TeamButtons teamNameButtons="homeButtons" teamTouchdownClass="homeButtons__touchdown" teamFieldGoalClass="homeButtons__fieldGoal" setTeamTouchdownScore={() => {setHomeScore(homeScore + 7)}} setTeamFieldGoalScore={() => {setHomeScore(homeScore + 3)}} teamTouchdown="Home Touchdown" teamFieldGoal="Home Field Goal" />
        {/* <div className="homeButtons"> */}
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          {/* <button className="homeButtons__touchdown" onClick={() => {setHomeScore(homeScore + 7)}}>Home Touchdown</button> */}
          {/* <button className="homeButtons__fieldGoal" onClick={() => {setHomeScore(homeScore + 3)}}>Home Field Goal</button> */}
        {/* </div> */}

        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => {setOtherScore(otherScore + 7)}}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => {setOtherScore(otherScore + 3)}}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
