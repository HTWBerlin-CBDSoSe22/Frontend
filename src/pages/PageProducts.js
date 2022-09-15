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


function PageProducts(){
    const [productIdNumber, setProductIdNumber] = useState("1");

    const handleClick = (productId) => {
        setProductIdNumber(productId - 1);
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

                <div>
                    <h1>View & Create Products</h1>
                    <Row>
                        <Col>
                            <h1>Products</h1>
                            <CustomCard content={
                                <ListGroup variant="flush">
                                    {allProductsRequest.data.map(({id, name}) =>
                                        <ListGroup.Item>
                                            <CustomButton buttonClick={() => handleClick(id)} buttonName={id + ": " + name}></CustomButton>
                                        </ListGroup.Item>
                                    )}
                                </ListGroup>
                            }>
                            </CustomCard>
                        </Col>
                        <Col>
                            <ProductDetails productId={productIdNumber}/>
                        </Col>
                    </Row>
                    <PostProduct/>
                </div>
            }

    return (
        <div>
            {content}
        </div>
    );
}

export default PageProducts;
