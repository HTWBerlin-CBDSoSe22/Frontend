import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProductDetails from "../fetch-data/ProductDetails";
import PostProduct from "../fetch-data/PostProduct";
import UseAxiosGet from "../hooks/UseAxiosGet";

import {useEffect, useState} from "react";
import CustomButton from "../components/CustomButton";
import CustomCard from "../components/CustomCard";
import CreateProduct from "../fetch-data/CreateProduct";


function PageProducts(props){
    const [productIdNumber, setProductIdNumber] = useState("1");

    const handleClick = (productId) => {
        setProductIdNumber(productId);
    }

    const showAllProductsUrl = 'http://localhost:8088/products';

    let allProductsRequest = UseAxiosGet(showAllProductsUrl)

    let content = null;

    if (allProductsRequest.error) {
        content =
            <p>There is a problem fetching the post data.</p>
    }
    if (allProductsRequest.loading) {
        content =
            <p>A moment please...</p>
    }
    if (allProductsRequest.data) {
        content =

                <div style={{marginLeft: "2rem"}}>
                    {/*<h1>View & Create Products</h1>*/}
                    <Row>
                        <Col>
                            <h1 style={{marginLeft: "165px", textAlign: "center", width: "12rem", backgroundColor: "white", border: "solid 3px black", borderRadius: "8px"}}>Products</h1>
                            <CustomCard content={
                                <ListGroup style={{padding: "10px 20px 10px 20px"}} variant="flush">
                                    {allProductsRequest.data.map(({productId, name}) =>
                                        <ListGroup.Item key={productId}>
                                            <CustomButton buttonClick={() => handleClick(productId)} buttonName={productId + ": " + name}></CustomButton>
                                        </ListGroup.Item>
                                    )}
                                </ListGroup>
                            }>
                            </CustomCard>
                        </Col>
                        <Col>
                            <ProductDetails productId={productIdNumber} selectedCurrency={props.selectedCurrency}/>
                        </Col>
                    </Row>
                    {/*<CreateProduct/>*/}
                </div>
            }

    return (
        <div>
            {content}
        </div>
    );
}

export default PageProducts;
