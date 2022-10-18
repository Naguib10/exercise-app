import '../App.css';
import Tab from "./Tab";
import Accordion from "./Accordion";
import { useState } from "react";
import Exercises from "../Exercises";

function App() {

  const [exercise, setExercise] = useState([]);
  const [days, setDay] = useState([
    { index: 1, title: "Monday" },
    { index: 2, title: "Tuesday" },
  ]);


  function addExercise() {
    let newExercise = { index: 3, title: "Exercise 3", desc: "This is Exercise 3 description" };
    setExercise(exercise => [...exercise, newExercise]);
  }

  function handleTabChange(titleTab) {
    setDay(titleTab);
  }

  return (
    <div>
      {days.map((item, index) => {
        return (
          <Tab
            key={index}
            title={item.title}
            content=
            {exercise.map((exercise, indexx) => {
              return (
                <Accordion
                  key={indexx}
                  title={exercise.title}
                  desc={exercise.desc}
                />
              )
            })}
          />
        )
      })}


      <button onClick={addExercise}>Add Exercise</button>
    </div>

  );
}

export default App;
