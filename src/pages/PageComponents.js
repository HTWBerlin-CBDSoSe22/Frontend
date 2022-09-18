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


function PageComponents(){
    const [componentId, setComponentId] = useState("1");
    // const [componentIdListForNewProduct, setComponentIdListForNewProduct] = useState(null);
    // const [aboutNewProduct, setAboutNewProduct] = useState(0);

    const showAllComponentsUrl = 'http://localhost:8088/components';

    let allComponentsRequest = UseAxiosGet(showAllComponentsUrl)

    let content = null;

    let componentList = [];

    let selectedComponentList = [];

    let componentCountForNewProduct = [];

    let componentNameForNewProduct = [];

    let componentData = [];

    let componentIdListForNewProduct = [];

    const handleClick = (id, name) => {
        setComponentId(id)
        console.log("name: " + name);
    }

    const handleSelectClick = (id) => {
        if (!selectedComponentList[id]) {
            componentIdListForNewProduct.push(id);
            selectedComponentList[id] = true;
        }
        else {
            alert('You already selected the component "' + allComponentsRequest.data[id].name + '"');
        }
    }

    const handleDeselectClick = (id) => {
        if (selectedComponentList[id]) {
            selectedComponentList[id] = false;
        }
        else {
            alert('The component "' + allComponentsRequest.data[id].name + '" is already deselected.');
        }
    }

    const showAllComponents = () => {
        for (let i = 0; i < allComponentsRequest.data.length; i++) {
            componentCountForNewProduct.push(0);
            componentList.push(
                <ListGroup.Item>
                    <CustomButton buttonClick={() => handleClick(i, allComponentsRequest.data[i].name)} buttonName={i + ": " + allComponentsRequest.data[i].name}></CustomButton>
                    <CustomButton buttonClick={() => handleDeselectClick(i)} buttonName={"-"} style={{marginLeft: '80px'}}></CustomButton>
                    <CustomButton buttonClick={() => handleSelectClick(i)} buttonName={"+"} style={{marginLeft: '80px'}}></CustomButton>
                </ListGroup.Item>
            )
            selectedComponentList.push(false);
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
        showAllComponents();
        content =

            <div>
                <h1>Components</h1>
                <Row>
                    <Col>
                        {/*<h1>Products</h1>*/}
                        <CustomCard content={
                            <ListGroup variant="flush">
                                {componentList}
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
                        <CreateProduct consistsOf={componentData} componentIdListForNewProduct={componentIdListForNewProduct}/>
                    </div>
                }>
                </CustomCardSmall>

                {/*{updateNumber()}*/}
            </div>
    }

    return (
        <div>
            {content}
        </div>
    );

    // return(
    //     <div>
    //         <Container style={{ margin: '60px'}}>
    //             <Row>
    //                 <Col>
    //                     <h1>Components</h1>
    //                     <CustomCard content={
    //                         // <Card.Header>Featured</Card.Header>
    //                         <ListGroup variant="flush">
    //                             <ListGroup.Item><CustomButton buttonName={"APPLE"}></CustomButton><CustomButton buttonName={"+"} style={{marginLeft: '80px'}}></CustomButton></ListGroup.Item>
    //                             <ListGroup.Item><CustomButton buttonName={"BANANA"}></CustomButton><CustomButton buttonName={"+"} style={{marginLeft: '80px'}}></CustomButton></ListGroup.Item>
    //                             <ListGroup.Item><CustomButton buttonName={"ORANGE"}></CustomButton><CustomButton buttonName={"+"} style={{marginLeft: '80px'}}></CustomButton></ListGroup.Item>
    //                             <ListGroup.Item><CustomButton buttonName={"STRAWBERRY"}></CustomButton><CustomButton buttonName={"+"} style={{marginLeft: '80px'}}></CustomButton></ListGroup.Item>
    //                             <ListGroup.Item><CustomButton buttonName={"BLUEBERRY"}></CustomButton><CustomButton buttonName={"+"} style={{marginLeft: '80px'}}></CustomButton></ListGroup.Item>
    //                             <ListGroup.Item><CustomButton buttonName={"MANGO"}></CustomButton><CustomButton buttonName={"+"} style={{marginLeft: '80px'}}></CustomButton></ListGroup.Item>
    //                             <ListGroup.Item><CustomButton buttonName={"CHERRY"}></CustomButton><CustomButton buttonName={"+"} style={{marginLeft: '80px'}}></CustomButton></ListGroup.Item>
    //                             <ListGroup.Item><CustomButton buttonName={"PINEAPPLE"}></CustomButton><CustomButton buttonName={"+"} style={{marginLeft: '80px'}}></CustomButton></ListGroup.Item>
    //                             <ListGroup.Item><CustomButton buttonName={"GRAPE"}></CustomButton><CustomButton buttonName={"+"} style={{marginLeft: '80px'}}></CustomButton></ListGroup.Item>
    //                             <ListGroup.Item><CustomButton buttonName={"SOME FRUIT"}></CustomButton><CustomButton buttonName={"+"} style={{marginLeft: '80px'}}></CustomButton></ListGroup.Item>
    //
    //                             {/*<ListGroup.Item><button type="button" class="btn btn-outline-success">BANANA</button></ListGroup.Item>*/}
    //                             {/*<ListGroup.Item><button type="button" class="btn btn-outline-success">ORANGE</button></ListGroup.Item>*/}
    //                             {/*<ListGroup.Item><button type="button" class="btn btn-outline-success">STRAWBERRY</button></ListGroup.Item>*/}
    //                             {/*<ListGroup.Item><button type="button" class="btn btn-outline-success">BLUEBERRY</button></ListGroup.Item>*/}
    //                             {/*<ListGroup.Item><button type="button" class="btn btn-outline-success">MANGO</button></ListGroup.Item>*/}
    //                             {/*<ListGroup.Item><button type="button" class="btn btn-outline-success">CHERRY</button></ListGroup.Item>*/}
    //                             {/*<ListGroup.Item><button type="button" class="btn btn-outline-success">PINEAPPLE</button></ListGroup.Item>*/}
    //                             {/*<ListGroup.Item><button type="button" class="btn btn-outline-success">GRAPE</button></ListGroup.Item>*/}
    //                             {/*<ListGroup.Item><button type="button" class="btn btn-outline-success">SOME FRUIT</button></ListGroup.Item>*/}
    //                         </ListGroup>
    //                     }>
    //                     </CustomCard>
    //                 </Col>
    //                 <Col>
    //                     <ComponentsDetails />
    //                 </Col>
    //             </Row>
    //             <CustomCardSmall content={
    //                 <div>
    //                     <CustomSubmitForm></CustomSubmitForm>
    //                     <CustomButton buttonName={"Create Product"}></CustomButton>
    //                 </div>
    //             }>
    //             </CustomCardSmall>
    //         </Container>
    //     </div>
    // );
}

export default PageComponents;
