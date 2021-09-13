import React from "react";

import "./GoalsList.css";

const GoalsList = (props) => {

  return (
    <ul className="goal-list">
      {props.goals.map((mygoal) => {
        return <li key={mygoal.id}>{mygoal.text}</li>;
      })}
    </ul>
  );
};

export default GoalsList;
