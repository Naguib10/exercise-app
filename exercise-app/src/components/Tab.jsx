import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from "react";
import Accordion from "./Accordion";
import Modal from "./Modal";
import Button from 'react-bootstrap/Button';

import Container from "./Container";


function UncontrolledExample(props) {

    // const [exerciseMon, setMon] = useState([]);
    // const [exerciseTues, setTues] = useState([]);

    const [exercises, setmyData] = useState([
        { id: 1, title: 'Accordion Item #1', desc: 'Lorem ipsum dolor sit amet 1' },
        { id: 2, title: 'Accordion Item #2', desc: 'Lorem ipsum dolor sit amet 2' },
        { id: 3, title: 'Accordion Item #3', desc: 'Lorem ipsum dolor sit amet 3' },
    ])

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

    const [modalShow, setModalShow] = useState(false);


    // function saveDay() {
    //     let newDay = {
    //         id: 3, dayName: 'Monday', dayData: [
    //             { dayDataId: 6, title: "Exercise 5", desc: "This is Exercise 5 description" },
    //             { dayDataId: 7, title: "Exercise 5", desc: "This is Exercise 5 description" }
    //         ]
    //     };
    //     setDay(prevState => [...prevState, newDay]);
    // }

    function onClickAddItem() {
        let currentObject = { id: 4, title: 'Accordion Item #4', desc: 'Lorem ipsum dolor sit amet 4' }
        setmyData(prevData => [...prevData, currentObject]);
        //console.log([days.dayData]);
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
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                            <button className='btn btn-primary' onClick={onClickAddItem}>hamada</button>
                        </Tab>
                    )
                })}

            </Tabs>

        </div>
    );
}

export default UncontrolledExample;