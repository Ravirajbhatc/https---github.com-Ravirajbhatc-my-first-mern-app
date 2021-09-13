import React, { useState } from "react";

import "./NewGoals.css";

const NewGoals = (props) => {
  const [enteredText, setEnteredText] = useState("");

  const textChangeHandelr = (event) => {
    setEnteredText(event.target.value);
    console.log(event.target.value);
  };

  const addGoalsHandler = (event) => {
    event.preventDefault(event);

    const newGoals = {
      id: Math.random().toString(),
      text: enteredText,
    };
    console.log(newGoals);
    setEnteredText("");

    props.onAddGoals(newGoals);
  };

  return (
    <form className="new-goals" onSubmit={addGoalsHandler}>
      <input type="text" value={enteredText} onChange={textChangeHandelr} />
      <button type="submit"> Add Goals</button>
    </form>
  );
};

export default NewGoals;
