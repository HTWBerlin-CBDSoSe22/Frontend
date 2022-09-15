import "../css/index.css";

import {Card, Table} from "react-bootstrap";
import UseAxiosGet from "../hooks/UseAxiosGet";
import {useState} from "react";
import React from 'react';

export default function ProductDetails(props) {
    const url = 'http://localhost:8088/products/' + props.productId;

    let request = UseAxiosGet(url)

    let content = null;

    let productDetails = [];

    const [fruitImage, setFruitImage] = useState("fruit_product2.jpeg")

    const showProductDetails = () => {
        for (let i = 0; i < request.data.consistsOf.length; i++) {
            productDetails.push(
                <tr>
                    <td>{request.data.consistsOf[i].name}</td>
                    <td>{request.data.consistsOf[i].price + " " + request.data.currency}</td>
                </tr>
            )
        }
        productDetails.push(
            <tr>
                <td><strong>Total pirce</strong></td>
                <td><strong>{request.data.price}</strong></td>
            </tr>
        )
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
                <div>
                    <h1>Product Details</h1>
                    <div >
                        <Card style={{
                            width: '39rem',
                            height: '34.5rem',
                            textAlign: "center",
                            // letterSpacing: "10px",
                            borderRadius: "5px",
                            border: "solid"
                        }}>
                            <h2>{request.data.name}</h2>
                            <img variant="top" src={require("../assets/" + fruitImage)}/>
                            <Table style={{marginTop: "1rem"}} striped bordered hover>
                                <thead>
                                    <tr>
                                        <th style={{width:"200px"}}>Name</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productDetails}
                                </tbody>
                            </Table>
                        </Card>
                    </div>
                </div>
            }

    return (
        <div>
            {content}
        </div>
    );
}

