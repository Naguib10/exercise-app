import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from "./Accordion";

function ContainerExample(props) {
    return (
        <Container>
            <Row>
                {props.accordion}
            </Row>
        </Container>
    );
}

export default ContainerExample;