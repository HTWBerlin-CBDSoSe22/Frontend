import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import ComponentsDetails from "../fetch-data/ComponentsDetails";
import CustomButton from "../components/CustomButton";
import CustomCard from "../components/CustomCard";
import CustomCardSmall from "../components/CustomCardSmall";
import UseAxiosGet from "../hooks/UseAxiosGet";
import CreateProduct from "../fetch-data/CreateProduct";
import {useEffect, useState} from "react";


function PageComponents(props) {
    const [componentId, setComponentId] = useState("1");
    const [componentListForNewProduct, setComponentListForNewProduct] = useState([]);
    const [selectedComponentList, setSelectedComponentList] = useState([]);
    const [selectedComponents, setSelectedComponents] = useState([]);

    const showAllComponentsUrl = 'http://localhost:8088/components';

    let allComponentsRequest = UseAxiosGet(showAllComponentsUrl)

    let content = null;

    let componentList = [];

    let componentButtonsList = []

    let componentData = [];

    const handleClick = (id, name) => {
        setComponentId(id + 1)
        console.log("name: " + name);
    }

    const handleSelectClick = (id, event) => {
        if (!componentIsSelected(id)) {
            addComponentsById(id);
            event.currentTarget.style.backgroundColor = 'crimson';
            event.currentTarget.style.color = 'white'
            event.currentTarget.textContent = "DESELECT";

            selectComponentsById(id);
        } else {
            removeComponentsById(id);

            deselectComponentsById(id)
            event.currentTarget.style.backgroundColor = 'white';
            event.currentTarget.style.color = 'green'
            event.currentTarget.textContent = "SELECT";
        }
    }

    const handleDeselectClick = (id) => {
        if (componentIsSelected(id)) {
            removeComponentsById(id);

            deselectComponentsById(id)
        } else {
            alert('The component "' + componentList[id].name + '" is already deselected.');
        }
    }

    const componentIsSelected = (id) => {
        for (let i = 0; i < selectedComponentList.length; i++) {
            if (selectedComponentList[i] === id) {
                return true;
            }
        }
        return false;
    }

    const addComponentsById = (id) => {
        setComponentListForNewProduct(current => [...current, componentList[id]]);
    }

    const removeComponentsById = (id) => {
        setComponentListForNewProduct(componentListForNewProduct.filter((element) => element !== componentList[id]));
    }

    const selectComponentsById = (id) => {
        setSelectedComponentList(current => [...current, id]);
    }

    const deselectComponentsById = (id) => {
        setSelectedComponentList(selectedComponentList.filter((element) => element !== id));
    }

    const showAllComponents = () => {
        for (let i = 0; i < componentList.length; i++) {
            componentButtonsList.push(
                <ListGroup.Item key={i}>
                    <CustomButton buttonClick={() => handleClick(i, componentList[i].name)}
                                  buttonName={i + 1 + ": " + componentList[i].name}
                    ></CustomButton>
                    <CustomButton buttonClick={(e) => handleSelectClick(i, e)}
                                  buttonName={"SELECT"} style={{marginLeft: '80px'}}></CustomButton>
                </ListGroup.Item>
            )
        }
    }

    if (allComponentsRequest.error) {
        content =
            <p>There is a problem fetching the post data.</p>
    }
    if (allComponentsRequest.loading) {
        content =
            <p>A moment please...</p>
    }
    if (allComponentsRequest.data) {
        componentList = allComponentsRequest.data;
        showAllComponents();
        content =

            <div style={{marginLeft: "2rem"}}>
                <Row>
                    <Col>
                        <h1 style={{marginLeft: "133px", textAlign: "center", width: "16rem", backgroundColor: "white", border: "solid 3px black", borderRadius: "8px"}}>Components</h1>
                        <CustomCardSmall content={
                            <div>
                                {selectedComponents}
                                <CreateProduct consistsOf={componentData}
                                               componentListForNewProduct={componentListForNewProduct}
                                               selectedCurrency={props.selectedCurrency}/>
                            </div>
                        }>
                        </CustomCardSmall>
                        <CustomCard content={
                            <ListGroup style={{padding: "10px 20px 10px 20px"}} variant="flush">
                                {componentButtonsList}
                            </ListGroup>
                        }>
                        </CustomCard>
                    </Col>
                    <Col>
                        <ComponentsDetails componentId={componentId}/>
                    </Col>
                </Row>

            </div>
    }

    return (
        <div>
            {content}
        </div>
    );
}

export default PageComponents;
