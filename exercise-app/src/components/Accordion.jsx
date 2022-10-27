import Accordion from 'react-bootstrap/Accordion';

function BasicExample(props) {
    return (
        <Accordion defaultActiveKey={props.index}>
            <Accordion.Item eventKey={props.index}>
                <Accordion.Header>{props.title}</Accordion.Header>
                <Accordion.Body>
                    {props.desc}
                    <button>delete</button>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default BasicExample;