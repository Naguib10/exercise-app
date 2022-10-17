import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Container from "./Container";


function UncontrolledExample(props) {
    return (
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey={props.index} title={props.title}>
                {props.content}
            </Tab>
            {/* <Tab eventKey="home2" title="Home2">
                Tab 2
            </Tab> */}

        </Tabs>
    );
}

export default UncontrolledExample;