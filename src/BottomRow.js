import React from "react";
import "./App.css";
import GameStats from "./GameStats.js";

const BottomRow = () => {
  return (
    <div className="bottomRow">

      <GameStats statsKind="down" statsTitleClass="down__title" statsValueClass="down__value" statsTitle="Down" statsValue={3} />
      {/* <div className="down"> */}
        {/* <h3 className="down__title">Down</h3> */}
        {/* <div className="down__value">3</div> */}
      {/* </div> */}

      <GameStats statsKind="toGo" statsTitleClass="toGo__title" statsValueClass="toGo__value" statsTitle="To Go" statsValue={7} />
      {/* <div className="toGo"> */}
        {/* <h3 className="toGo__title">To Go</h3> */}
        {/* <div className="toGo__value">7</div> */}
      {/* </div> */}
      <GameStats statsKind="ballOn" statsTitleClass="ballOn__title" statsValueClass="ballOn__value" statsTitle="Ball on" statsValue={21} />
      {/* <div className="ballOn"> */}
        {/* <h3 className="ballOn__title">Ball on</h3> */}
        {/* <div className="ballOn__value">21</div> */}
      {/* </div> */}
      <GameStats statsKind="quarter" statsTitleClass="quarter__title" statsValueClass="quarter__value" statsTitle="Quarter" statsValue={4} />
      {/* <div className="quarter"> */}
        {/* <h3 className="quarter__title">Quarter</h3> */}
        {/* <div className="quarter__value">4</div> */}
      {/* </div> */}
    </div>
  );
};

export default BottomRow;
