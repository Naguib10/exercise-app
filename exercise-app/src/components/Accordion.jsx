import Accordion from 'react-bootstrap/Accordion';

function BasicExample(props) {

    function handleClick() {
        props.onDelete(props.day, props.id);
    }

    return (
        <Accordion defaultActiveKey={props.index}>
            <Accordion.Item eventKey={props.index}>
                <Accordion.Header>{props.selectEmoji} {props.title}</Accordion.Header>
                <Accordion.Body>
                    {props.desc}
                    <button className='btn btn-danger float-end align-top' onClick={handleClick}>Remove</button>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default BasicExample;