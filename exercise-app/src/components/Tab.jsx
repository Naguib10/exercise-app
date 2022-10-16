import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function UncontrolledExample() {
    return (
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="home" title="Home">
                <p>this is where you should put a container</p>
            </Tab>
        </Tabs>
    );
}

export default UncontrolledExample;