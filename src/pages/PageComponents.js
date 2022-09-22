import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import ComponentsDetails from "../fetch-data/ComponentsDetails";
import CustomButton from "../components/CustomButton";
import CustomCard from "../components/CustomCard";
import CustomCardSmall from "../components/CustomCardSmall";
import CustomSubmitForm from "../components/CustomSubmitForm";
import UseAxiosGet from "../hooks/UseAxiosGet";
import ProductDetails from "../fetch-data/ProductDetails";
import CreateProduct from "../fetch-data/CreateProduct";
import {useEffect, useState} from "react";
import Component from "../components/Component";


function PageComponents(props){
    const [componentId, setComponentId] = useState("1");
    const [componentListForNewProduct, setComponentListForNewProduct] = useState([]);
    const [selectedComponentList, setSelectedComponentList] = useState([]);
    const [selectedComponents, setSelectedComponents] = useState([]);

    const [buttonLabelList, setButtonLabelList] = useState([]);

    const showAllComponentsUrl = 'http://localhost:8088/components';

    let allComponentsRequest = UseAxiosGet(showAllComponentsUrl)

    let content = null;

    let componentList = [];

    let componentButtonsList = []

    let componentData = [];

    const handleClick = (id, name) => {
        setComponentId(id)
        console.log("name: " + name);
    }

    const handleSelectClick = (id, event) => {
        if (!componentIsSelected(id)) {
            addComponentsById(id);
            event.currentTarget.style.backgroundColor = 'crimson';
            event.currentTarget.style.color='white'
            event.currentTarget.textContent="DESELECT";

            selectComponentsById(id);
        }
        else {
            // alert('You already selected the component "' + componentList[id].name + '"');
            removeComponentsById(id);

            deselectComponentsById(id)
            event.currentTarget.style.backgroundColor = 'white';
            event.currentTarget.style.color='green'
            event.currentTarget.textContent="SELECT";
        }
    }

    const handleDeselectClick = (id) => {
        if (componentIsSelected(id)) {
            removeComponentsById(id);

            deselectComponentsById(id)
        }
        else {
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
        // setButtonLabel("DESELECT");
        // setSelectedComponents(current => [...current, componentList[id].name]);
        setSelectedComponentList(current => [...current, id]);
    }

    const deselectComponentsById = (id) => {
        // setButtonLabel("SELECT");
        // setSelectedComponents(selectedComponents.filter((element) => element !== selectedComponents[id]));
        setSelectedComponentList(selectedComponentList.filter((element) => element !== id));
    }

    const showAllComponents = () => {
        for (let i = 0; i < componentList.length; i++) {
            // setButtonLabelList(current => [...current, "SELECTED"]);
            componentButtonsList.push(
                <ListGroup.Item key={i}>
                    <CustomButton buttonClick={() => handleClick(i, componentList[i].name)} buttonName={i + ": " + componentList[i].name}></CustomButton>
                    {/*<CustomButton buttonClick={() => handleDeselectClick(i)} buttonName={"-"} style={{marginLeft: '80px'}}></CustomButton>*/}
                    <CustomButton buttonClick={(e) => handleSelectClick(i, e)} buttonName={"SELECT"} style={{marginLeft: '80px'}}></CustomButton>
                    {/*<CustomButton buttonClick={() => handleSelectClick(i)} buttonName={buttonLabelList[i]} style={{marginLeft: '80px'}}></CustomButton>*/}
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

            <div>
                <h1>Components</h1>
                <Row>
                    <Col>
                        <CustomCard content={
                            <ListGroup variant="flush">
                                {componentButtonsList}
                            </ListGroup>
                        }>
                        </CustomCard>
                    </Col>
                    <Col>
                        <h3>will work soon...</h3>
                        <h6>(waiting for product service to be ready)</h6>
                        {/*<ComponentsDetails componentId={componentId}/>*/}
                    </Col>
                </Row>
                <CustomCardSmall content={
                    <div>
                        {selectedComponents}
                        <CreateProduct consistsOf={componentData} componentListForNewProduct={componentListForNewProduct} selectedCurrency={props.selectedCurrency}/>
                    </div>
                }>
                </CustomCardSmall>
            </div>
    }

    return (
        <div>
            {content}
        </div>
    );
}

export default PageComponents;
