import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Example(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [newExercise, setNewExercise] = useState({
        title: "",
        desc: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNewExercise(prevState => {
            return {
                ...prevState,
                [name]: value
            };
        })
    }

    function addExercise() {
        props.onAdd(newExercise, props.dayId);
        setNewExercise({
            title: "",
            desc: ""
        })
        handleClose();
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Exercise
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
                                //desc={props.desc}

                                placeholder="For example, 'Bench Press'"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Exercise Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                onChange={handleChange}
                                name="desc"
                                value={newExercise.desc} />
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