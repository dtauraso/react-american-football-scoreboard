import React from "react";
import "./App.css";
import GameStats from "./GameStats.js";

const BottomRow = (props) => {

  
  // console.log(props.myValue)
  return (
    <div className="bottomRow">

      <GameStats  statsKind="down"
                  statsTitleClass="down__title"
                  statsValueClass="down__value"
                  statsTitle="Down"
                  statsValue={3} />

      <GameStats  statsKind="toGo"
                  statsTitleClass="toGo__title"
                  statsValueClass="toGo__value"
                  statsTitle="To Go"
                  statsValue={7} />

      <GameStats  statsKind="ballOn"
                  statsTitleClass="ballOn__title"
                  statsValueClass="ballOn__value"
                  statsTitle="Ball on"
                  statsValue={21} />

      <GameStats  statsKind="quarter"
                  statsTitleClass="quarter__title"
                  statsValueClass="quarter__value"
                  statsTitle="Quarter"
                  statsValue={props.myValue} />

    </div>
  );
};

export default BottomRow;
