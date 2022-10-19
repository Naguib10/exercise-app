import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Container from "./Container";


function CreateTab(props) {

    //const days = [{ id: 0, title: "Mond", content: props.content }, { id: 1, title: "Tues", content: props.content }];


    return (
        <Tabs
            defaultActiveKey={props.index}
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey={"1"} title="Monday">
                {props.monContent}
            </Tab>
            <Tab eventKey="2" title="Tuesday">
                {props.tuesContent}
            </Tab>

        </Tabs>
    );
}

export default CreateTab;