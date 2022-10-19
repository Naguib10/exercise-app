import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from "react";
import Accordion from "./Accordion";

import Container from "./Container";


function UncontrolledExample(props) {

    const [exerciseMon, setMon] = useState([]);
    const [exerciseTues, setTues] = useState([]);

    function addMonEx() {
        let newExercise = { index: 3, title: "Exercise 3", desc: "This is Exercise 3 description" };
        setMon(exerciseMon => [...exerciseMon, newExercise]);
    }

    function addTuesEx() {
        let newExercise = { index: 3, title: "Exercise 3", desc: "This is Exercise 3 description" };
        setTues(exerciseTues => [...exerciseTues, newExercise]);
    }



    return (
        <div>
            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="1" title="Monday">
                    {exerciseMon.map((item, index) => {
                        return (
                            <Accordion
                                key={index}
                                title={item.title}
                                desc={item.desc}
                            />
                        )
                    })}
                    <button onClick={addMonEx}>Add Monday</button>
                </Tab>
                <button onClick={addMonEx}>Add Monday</button>
                <Tab eventKey="2" title="Tuesday">
                    {exerciseTues.map((item, index) => {
                        return (
                            <Accordion
                                key={index}
                                title={item.title}
                                desc={item.desc}
                            />
                        )
                    })}
                    <button onClick={addTuesEx}>Add Tuesday</button>
                </Tab>

            </Tabs>
            {/* <button onClick={addTuesEx}>Add Tuesday</button> */}
        </div>
    );
}

export default UncontrolledExample;