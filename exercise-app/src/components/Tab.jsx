import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from "react";
import Accordion from "./Accordion";
import Modal from "./Modal";
import Button from 'react-bootstrap/Button';

import Container from "./Container";


function UncontrolledExample(props) {

    const [days, setDay] = useState([
        {
            id: 1, dayName: 'Saturday', dayData: [
                { dayDataId: 1, title: "Exercise 3", desc: "This is Exercise 3 description" },
                { dayDataId: 2, title: "Exercise 3", desc: "This is Exercise 3 description" }
            ]
        },
        {
            id: 2, dayName: 'Sunday', dayData: [
                { dayDataId: 3, title: "Exercise 4", desc: "This is Exercise 4 description" },
                { dayDataId: 4, title: "Exercise 4", desc: "This is Exercise 4 description" }
            ]
        }
    ])
    //const [open, setIsOpen] = useState(false);

    const [newExercise, setNewExercise] = useState({
        title: "",
        desc: ""
    });

    const [modalShow, setModalShow] = useState(false);

    function addExercise(exercise) {


        setNewExercise(exercise);

        //console.log(newExercise);

        return newExercise;
        // let newExercise = {
        //     title: exercise.title,
        //     description: exercise.description
        // }
        // console.log(exercise);
        // console.log(newExercise);
        // return newExercise;
    }

    function onClickAddItem(id) {
        //let newItem = { dayDataId: 5, title: "Exercise 5", desc: "This is Exercise 5 description" };
        let newItem = addExercise();

        days[id].dayData.push(newItem);
        //console.log(newItem);
        console.log(days);

        setDay((prevData) => [...prevData]);



        // setDay(prevData => {
        //     const newH = prevData[id].dayData.push(newItem);
        //     return [...prevData, newH]
        // });


        // setDay(
        //     (prevState) => ({
        //         ...prevState,
        //         dayData: {
        //             ...prevState[id].dayData, newItem
        //         }
        //     })
        // )

    }

    return (
        <div>
            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                {days.map((day, dayIndex) => {
                    return (
                        <Tab eventKey={dayIndex} title={day.dayName} key={dayIndex}>
                            {day.dayData.map((dayDataItem, dayDataIndex) => {
                                return (
                                    <Accordion
                                        key={dayDataIndex}
                                        title={dayDataItem.title}
                                        desc={dayDataItem.desc}
                                    />
                                )
                            })}
                            <Modal
                                onAdd={addExercise}
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                title={newExercise.title}
                                desc={newExercise.desc}
                            />
                            <button className='btn btn-primary' onClick={() => onClickAddItem(dayIndex)}>hamada</button>

                        </Tab>
                    )
                })}

            </Tabs>

        </div>
    );
}

export default UncontrolledExample;