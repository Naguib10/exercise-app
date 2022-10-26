import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Example(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const [exercise, setExercise] = useState({
    //     title: "",
    //     description: ""
    // });

    const [newExercise, setNewExercise] = useState({
        title: "",
        desc: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        //const title = event.target.value;

        setNewExercise(prevState => {
            return {
                ...prevState,
                [name]: value
                //title
            };
        })
        // console.log(name);
    }

    function addExercise() {
        props.onAdd(newExercise);
        setNewExercise({
            title: "",
            desc: ""
        })
        //event.preventDefault();
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Monday
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Exercise</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Exercise Name</Form.Label>
                            <Form.Control
                                //type="email"

                                onChange={handleChange}
                                name="title"
                                value={newExercise.title}
                                desc={props.desc}

                                placeholder="For example, 'Bench Press'"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Exercise Description</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addExercise}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example;