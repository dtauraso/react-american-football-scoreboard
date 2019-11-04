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
  let [quarterValue, setQuarterValue] = useState(0)
  const setScores = (teamName, pointsAwarded) => {

      if(teamName === "home") {
        setHomeScore(homeScore + pointsAwarded)
      } else if(teamName === "other") {
        setOtherScore(otherScore + pointsAwarded)
      }
  }

  
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">

          <ScoreBoard teamClass="home"
                      teamNameClass="home__name"
                      teamName="Lions"
                      teamScoreClass="home__score"
                      teamScore={homeScore} />
          {/* <div className="home"> */}

            {/* <h2 className="home__name">Lions</h2> */}

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            {/* <div className="home__score">{homeScore}</div> */}

          {/* </div> */}

          
          <div className="timer">00:03</div>
          <ScoreBoard teamClass="away"
                      teamNameClass="away__name"
                      teamName="Tigers"
                      teamScoreClass="away__score"
                      teamScore={otherScore} />
        </div>
        <BottomRow myValue={quarterValue}/>
      </section>
      <section className="buttons">
        <TeamButtons  teamNameButtons="homeButtons"
                      teamTouchdownClass="homeButtons__touchdown"
                      teamFieldGoalClass="homeButtons__fieldGoal"
                      setTeamTouchdownScore={() => {setScores("home", 7)}}
                      setTeamFieldGoalScore={() => {setScores("home", 3)}}
                      teamTouchdown="Home Touchdown"
                      teamFieldGoal="Home Field Goal" />

        <TeamButtons  teamNameButtons="awayButtons"
                      teamTouchdownClass="awayButtons__touchdown"
                      teamFieldGoalClass="awayButtons__fieldGoal"
                      setTeamTouchdownScore={() => {setScores("other", 7)}}
                      setTeamFieldGoalScore={() => {setScores("other", 3)}}
                      teamTouchdown="Away Touchdown"
                      teamFieldGoal="Away Field Goal" />
        {/* mod whatever the value is then add 1 to prevent it from being 0 */}
        <button className="homeButtons__touchdown" onClick={() => {setQuarterValue( (quarterValue % 4) + 1 )}}>Increase Quarter</button>

      </section>
    </div>
  );
}

export default App;
