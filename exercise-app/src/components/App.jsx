import '../App.css';
import Tab from "./Tab";
import Accordion from "./Accordion";
import { useState } from "react";
import Exercises from "../Exercises";

function App() {

  const [exercise, setExercise] = useState([]);
  const [days, setDay] = useState(["Monday"]);


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
            onChange={handleTabChange}
            content=
            {exercise.map((item, index) => {
              return (
                <Accordion
                  key={index}
                  title={item.title}
                  desc={item.desc}
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
