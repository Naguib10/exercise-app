import '../App.css';
import Tab from "./Tab";
import Accordion from "./Accordion";
import { useState } from "react";

function App() {



  const [exercise, addExercise] = useState([
    { index: 1, title: "Exercise 1", desc: "This is Exercise 1 description" },
    { index: 2, title: "Exercise 2", desc: "This is Exercise 2 description" }
  ])

  console.log(exercise);


  return (
    <div>
      {exercise.map((item, index) => {
        return (
          <Accordion
            key={index}
            title={item.title}
            desc={item.desc}
          />
        )
      })}


    </div>
  );


}

export default App;
