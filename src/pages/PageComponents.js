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
    // const [aboutNewProduct, setAboutNewProduct] = useState(0);

    const showAllComponentsUrl = 'http://localhost:8088/components';

    let allComponentsRequest = UseAxiosGet(showAllComponentsUrl)

    let content = null;

    let componentList = [];

    let componentCountForNewProduct = [];

    let componentNameForNewProduct = [];

    let componentData = [];

    // let aboutNewProduct = null;

    // useEffect(() => {
    //     updateNumber();
    //     console.log("useEffect!!!");
    // }, [aboutNewProduct])
    //
    // const updateNumber = () => {
    //     return <h3>{aboutNewProduct}</h3>;
    // }

    const handleClick = (id, name) => {
        setComponentId(id)
        console.log("name: " + name);
    }

    const handleAddClick = (id) => {
        if (componentCountForNewProduct[id] <= 2) {
            // setAboutNewProduct(allComponentsRequest.data[id].name)
            componentCountForNewProduct[id]++;
            console.log(componentCountForNewProduct[id]);
            componentData.push(allComponentsRequest.data[id]);
            // aboutNewProduct = componentCountForNewProduct[id];
            // setAboutNewProduct(componentCountForNewProduct[id])
            // setAboutNewProduct(aboutNewProduct + 1);
        }
        else {
            alert('You can not add more than that.');
        }

    }

    const handleRemoveClick = (id) => {
        if (componentCountForNewProduct[id] >= 1) {
            componentCountForNewProduct[id]--;
            console.log(componentCountForNewProduct[id]);
            // setAboutNewProduct(<h3>{componentCountForNewProduct[id]}</h3>)
            // setAboutNewProduct(aboutNewProduct - 1);
        }
        else {
            alert('You can not remove more than that.');
        }

    }

    const showComponentList = () => {
        for (let i = 0; i < allComponentsRequest.data.length; i++) {
            componentCountForNewProduct.push(0);
            componentList.push(
                <ListGroup.Item>
                    <CustomButton buttonClick={() => handleClick(i, allComponentsRequest.data[i].name)} buttonName={i + ": " + allComponentsRequest.data[i].name}></CustomButton>
                    <CustomButton buttonClick={() => handleRemoveClick(i)} buttonName={"-"} style={{marginLeft: '80px'}}></CustomButton>
                    <CustomButton buttonClick={() => handleAddClick(i)} buttonName={"+"} style={{marginLeft: '80px'}}></CustomButton>
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
        showComponentList();
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
                        <ComponentsDetails componentId={componentId}/>
                    </Col>
                </Row>
                <CreateProduct consistsOf={componentData}/>
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
