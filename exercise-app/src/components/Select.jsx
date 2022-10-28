import Form from 'react-bootstrap/Form';

function SelectBasicExample() {
    return (
        <Form.Select aria-label="Default select example">
            <option></option>
            <option value="1">Upper</option>
            <option value="2">Lower</option>
        </Form.Select>
    );
}

export default SelectBasicExample;