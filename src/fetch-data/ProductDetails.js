import "../css/index.css";

import {Table} from "react-bootstrap";
import UseAxiosGet from "../hooks/UseAxiosGet";
import React from 'react';
import CustomCard from "../components/CustomCard";

export default function ProductDetails(props) {
    let params = props.selectedCurrency;

    const url = 'http://localhost:8088/products/' + props.productId + "?newCurrency=" + params;

    let request = UseAxiosGet(url)

    let content = null;

    let productDetails = [];

    const showProductDetails = () => {
        for (let i = 0; i < request.data.consistsOf.length; i++) {
            productDetails.push(
                <tr key={i}>
                    <td>{request.data.consistsOf[i].name}</td>
                </tr>
            )
        }
    }

    if (request.error) {
        content =
            <p>There is a problem fetching the post data.</p>
    }
    if (request.loading) {
        content =
            <p>A moment please...</p>
    }

    if (request.data) {
        showProductDetails();
        content =
                <div style={{marginRight: "1rem"}}>
                    <h1 className="h1-product-details">Product Details</h1>

                    <div>
                        <CustomCard content={
                            <div>
                                <h2 className="h2-product-name">{request.data.name}</h2>
                                <img className="img" variant="top" src={require("../assets/fruits_banner.jpeg")}/>

                                <Table style={{marginTop: "1rem"}} striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th style={{width:"600px"}}>Name</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {productDetails}
                                    </tbody>
                                </Table>

                            </div>
                        }>
                        </CustomCard>

                        <div style={{display: "block"}}>
                            <h3 className="h3-total-price">
                                <strong>Total Price: {request.data.price.toFixed(2) + " " + request.data.currency}</strong>
                            </h3>
                        </div>

                    </div>
                </div>
            }

    return (
        <div>
            {content}
        </div>
    );
}

