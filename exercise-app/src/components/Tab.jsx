import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from "react";
import Accordion from "./Accordion";
import Modal from "./Modal";
import Button from 'react-bootstrap/Button';


function UncontrolledExample(props) {

    const [days, setDay] = useState([
        {
            id: 0, dayName: 'Monday', dayData: []
        },
        {
            id: 1, dayName: 'Tuesday', dayData: []
        },
        {
            id: 2, dayName: 'Wednesday', dayData: []
        },
        {
            id: 3, dayName: 'Thursday', dayData: []
        },
        {
            id: 4, dayName: 'Friday', dayData: []
        },
        {
            id: 5, dayName: 'Saturday', dayData: []
        },
        {
            id: 6, dayName: 'Sunday', dayData: []
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

    function deleteExercise(dayId, exerciseId) {
        days[dayId].dayData.splice(exerciseId, 1);
        setDay((prevData) => [...prevData]);
        console.log(dayId);
        console.log(exerciseId);
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
                                        id={dayDataIndex}
                                        day={dayIndex}
                                        title={dayDataItem.title}
                                        desc={dayDataItem.desc}
                                        onDelete={deleteExercise}
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