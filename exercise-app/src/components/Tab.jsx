import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from "react";
import Accordion from "./Accordion";
import Modal from "./Modal";
import Button from 'react-bootstrap/Button';


function UncontrolledExample(props) {

    const [days, setDay] = useState([
        {
            id: 0, dayName: 'Monday', dayData: [
                { title: "Exercise 3", desc: "This is Exercise 3 description" },
                { title: "Exercise 3", desc: "This is Exercise 3 description" }
            ]
        },
        {
            id: 1, dayName: 'Tuesday', dayData: [
                { dayDataId: 3, title: "Exercise 4", desc: "This is Exercise 4 description" },
                { dayDataId: 4, title: "Exercise 4", desc: "This is Exercise 4 description" }
            ]
        },
        {
            id: 2, dayName: 'Wednesday', dayData: [
            ]
        }
    ])
    //const [open, setIsOpen] = useState(false);

    const [newExercise, setNewExercise] = useState({
        title: "",
        desc: ""
    });

    const [modalShow, setModalShow] = useState(false);

    function addExercise(exercise, id) {
        setNewExercise(exercise);
        days[id].dayData.push(exercise);
        setDay((prevData) => [...prevData]);
    }

    // function onClickAddItem(id) {
    //     days[id].dayData.push(newExercise);
    //     console.log(newExercise);
    //     setDay((prevData) => [...prevData]);
    // }

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
                                dayId={dayIndex}
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                title={newExercise.title}
                                desc={newExercise.desc}
                            />
                            {/* <button className='btn btn-primary' onClick={() => onClickAddItem(dayIndex)}>hamada</button> */}

                        </Tab>
                    )
                })}

            </Tabs>

        </div>
    );
}

export default UncontrolledExample;