import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Example(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [exercise, setExercise] = useState({
        title: "",
        description: ""
    });

    function handleChange(event) {
        const { exercise, value } = event.target;
        setExercise(prevState => {
            return {
                ...prevState,
                [exercise]: value
            }
        })
    }

    function addExercise(event) {
        props.onAdd(exercise);
        setExercise({
            title: "",
            description: ""
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
                                value={props.title}
                                onChange={handleChange}
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