import "../css/index.css";

import {Card, Table} from "react-bootstrap";
import UseAxiosGet from "../hooks/UseAxiosGet";
import {useState} from "react";
import React from 'react';
import CustomCard from "../components/CustomCard";

export default function ProductDetails(props) {
    let params = props.selectedCurrency;

    const url = 'http://localhost:8088/products/' + props.productId + "?newCurrency=" + params;

    let request = UseAxiosGet(url)

    let content = null;

    let productDetails = [];

    const [fruitImage, setFruitImage] = useState("fruits_banner.jpeg")

    const showProductDetails = () => {
        for (let i = 0; i < request.data.consistsOf.length; i++) {
            productDetails.push(
                <tr>
                    <td>{request.data.consistsOf[i].name}</td>
                    {/*<td>{request.data.consistsOf[i].price}</td>*/}
                </tr>
            )
        }
        // productDetails.push(
        //     <tr>
        //         <td><strong>Total pirce</strong></td>
        //         <td><strong>{request.data.price + " " + request.data.currency}</strong></td>
        //     </tr>
        // )
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
                    <h1 style={{marginLeft: "95px", textAlign: "center", width: "20rem", backgroundColor: "white", border: "solid 3px black", borderRadius: "8px"}}>Product Details</h1>
                    <div>
                        <CustomCard content={
                            <div>
                                <h2 style={{
                                    display: "block",
                                    margin: "5px auto 5px auto", width: "20rem", borderRadius: "15px",
                                    border: "solid 1px #324E01"}}>{request.data.name}</h2>
                                <img style={{borderRadius: "15px",
                                    border: "solid 1px #324E01"}} variant="top" src={require("../assets/" + fruitImage)}/>
                                <Table style={{marginTop: "1rem"}} striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th style={{width:"600px"}}>Name</th>
                                            {/*<th>Price</th>*/}
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
                        <h3 style={{textAlign: "center", margin: "8px 7rem 5px 3rem", borderRadius: "7px",
                            border: "solid", borderWidth: "2px", borderColor: "crimson", backgroundColor: "white"}}>
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

