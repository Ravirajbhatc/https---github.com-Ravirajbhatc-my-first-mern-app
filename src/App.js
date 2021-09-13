import React, { useState } from "react";

import "./App.css";

import GoalsList from "./components/GoalList/GoalsList";
import NewGoals from "./components/NewGoals/NewGoals";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "Finish the Goals" },
    { id: "cg2", text: "Learn all about MERN" },
    { id: "cg3", text: " Answer Q&A" },
  ]);

  const addNewGoalHandler = (newGoals) => {
    // not best aproach --- setCourseGoals(courseGoals.concat(newGoals));
    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoals));
  };
  return (
    <div className="course-goal">
      <h2>Goals</h2>
      <NewGoals onAddGoals={addNewGoalHandler} />
      <GoalsList goals={courseGoals} />
    </div>
  );
};
export default App;
