import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from "./Accordion";

function ContainerExample() {
    return (
        <Container>
            <Row>
                <Accordion />
                <Accordion />

            </Row>
        </Container>
    );
}

export default ContainerExample;