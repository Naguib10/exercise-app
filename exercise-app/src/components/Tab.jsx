import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Container from "./Container";


function CreateTab(props) {

    //const days = [{ id: 0, title: "Mond", content: props.content }, { id: 1, title: "Tues", content: props.content }];

    function handleTabChange(enteredDay) {

    }

    return (
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
            onSelect={props.handleTabChange}
        >
            <Tab eventKey={props.index} title={props.title}>
                {props.content}
            </Tab>

        </Tabs>
    );
}

export default CreateTab;