import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function SelectBasicExample(props) {


    return (
        <Form.Group aria-label="Default select example">
            <Form.Control
                as="select"
                onChange={props.onChange}
            //value={props.value}

            >
                <option></option>
                <option value="💪">💪Upper body exercise</option>
                <option value="🦵">🦵Lower body exercise</option>
            </Form.Control>
        </Form.Group>
    );
}

export default SelectBasicExample;