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


function PageComponents(){
    const [componentId, setComponentId] = useState("1");
    const [componentListForNewProduct, setComponentListForNewProduct] = useState([]);
    const [selectedComponentList, setSelectedComponentList] = useState([]);
    const [buttonLabel, setButtonLabel] = useState("SELECT");

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

    const handleSelectClick = (id) => {
        if (!componentIsSelected(id)) {
            addComponentsById(id);

            selectComponentsById(id);
        }
        else {
            alert('You already selected the component "' + componentList[id].name + '"');
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
        setButtonLabel("DESELECT");
        setSelectedComponentList(current => [...current, id]);
    }

    const deselectComponentsById = (id) => {
        setButtonLabel("SELECT");
        setSelectedComponentList(selectedComponentList.filter((element) => element !== id));
    }

    const showAllComponents = () => {
        for (let i = 0; i < componentList.length; i++) {
            componentButtonsList.push(
                <ListGroup.Item>
                    <CustomButton buttonClick={() => handleClick(i, componentList[i].name)} buttonName={i + ": " + componentList[i].name}></CustomButton>
                    <CustomButton buttonClick={() => handleDeselectClick(i)} buttonName={"-"} style={{marginLeft: '80px'}}></CustomButton>
                    <CustomButton buttonClick={() => handleSelectClick(i)} buttonName={"+"} style={{marginLeft: '80px'}}></CustomButton>
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
                        <CreateProduct consistsOf={componentData} componentListForNewProduct={componentListForNewProduct}/>
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
