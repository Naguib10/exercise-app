import '../App.css';
import Tab from "./Tab";
import Accordion from "./Accordion";
import { useState } from "react";
import Exercises from "../Exercises";

function App() {

  const [exerciseMon, setExerciseMon] = useState([Exercises]);
  const [exerciseTues, setExerciseTues] = useState([]);
  const [day, setDay] = useState([]);
  const days = [{ id: 0, title: "Monday" }, { id: 1, title: "Tuesday" }];


  function addExerciseMon() {
    let newExercise = { index: 3, title: "Exercise 3", desc: "This is Exercise 3 description" };
    setExerciseMon(exerciseMon => [...exerciseMon, newExercise]);
  }

  function addExerciseTues() {
    let newExercise = { index: 3, title: "Exercise 3", desc: "This is Exercise 3 description" };
    setExerciseTues(exerciseTues => [...exerciseTues, newExercise]);
  }

  return (
    <div>

      <Tab
        key={days.id}
        monContent=
        {exerciseMon.map((item, index) => {
          return (
            <div>
              <Accordion
                key={index}
                title={item.title}
                desc={item.desc}
              />
              <button onClick={addExerciseMon}>Add Exercise</button>
            </div>
          )
        })}
        tuesContent=
        {exerciseTues.map((item, index) => {
          return (
            <div>
              <Accordion
                key={index}
                title={item.title}
                desc={item.desc}
              />
              <button onClick={addExerciseTues}>Add Exercise</button>
            </div>
          )
        })}
      />


    </div>

  );
}

export default App;
