import React from "react";
import "./score.css";


function Score (props) {
  return (
    <header className="hero is-success is-bold scoreB">
      <div className="hero-body row">
        <div className="col-md-6 col-left"><h5>{props.title}</h5></div>
        <div className="col-md-3 col-right"><h6>High Score {props.topScore}</h6></div>
        <div className="col-md-3 col-right"><h6>Current Score: {props.score}</h6></div>
      </div>
      <div className="row">
      <div className="col-md-12 col-right">
      <h6>Click on a flower, but don't click on it more than once!</h6></div>
      </div>

    </header>
  );
}

export default Score;
