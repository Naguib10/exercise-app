import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Container from "./Container";


function CreateTab(props) {

    const days = [{ id: 0, title: "Mond", content: props.content }, { id: 1, title: "Tues", content: props.content }];

    return (
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            {days.map((item, index) => {
                return (
                    <Tab eventKey={index} title={item.title}>
                        {item.content}
                    </Tab>
                )
            })}

            {/* <Tab eventKey="home2" title="Home2">
                {props.content}
            </Tab> */}

        </Tabs>
    );
}

export default CreateTab;