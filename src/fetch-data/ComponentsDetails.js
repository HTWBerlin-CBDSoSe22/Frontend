import "../css/index.css";
import { useState, useEffect } from "react";

import axios from "axios";
import {Card, Table} from "react-bootstrap";

export default function ComponentsDetails() {
    const [componentDetails, setComponentDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getComponentDetails = async () => {
            try {
                const response = await axios.get(
                    // `https://jsonplaceholder.typicode.com/posts?_limit=10`
                    // `https://jsonplaceholder.typicode.com/todos?_limit=1`
                    `http://localhost:8088/components`
                );
                setComponentDetails(response.data);
                setError(null);
            } catch (err) {
                setError(err.message);
                console.log(err)
                setComponentDetails(null);
            } finally {
                setLoading(false);
            }
        };
        getComponentDetails();
    }, []);

    return (
        <div>
            <h1>Component Details</h1>
            <div style={{width: '39rem', height:'34.5rem', textAlign: "center", borderRadius:"5px", border:"solid"}}>
                {loading && <div>A moment please...</div>}
                {error && (
                    <div>{`There is a problem fetching the post data - ${error}`}</div>
                )}
                {componentDetails && componentDetails.map(({
                   id, name, price, height, weight, color, countryOfOrigin, grade, category, classification, harvestSeason
                }) => (
                <Card>
                    <h2>Component 01</h2>
                    <img variant="top" src={require("../assets/fruits_banner.jpeg")}/>

                    {/*<ListGroup style={{marginTop: "1rem"}} className="list-group-flush">*/}
                    {/*    <ListGroup.Item>Cras justo odio</ListGroup.Item>*/}
                    {/*    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>*/}
                    {/*    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>*/}
                    {/*</ListGroup>*/}
                    <Table style={{marginTop: "1rem"}} striped bordered hover>
                        <thead>
                            <tr>
                                <th style={{width:"200px"}}>Name</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>name</td>
                                <td>{name}</td>
                            </tr>
                            <tr>
                                <td>price</td>
                                <td>{price}</td>
                            </tr>
                            <tr>
                                <td>height</td>
                                <td>{height}</td>
                            </tr>
                            <tr>
                                <td>weight</td>
                                <td>{weight}</td>
                            </tr>
                            <tr>
                                <td>color</td>
                                <td>{color}</td>
                            </tr>
                            <tr>
                                <td>country of origin</td>
                                <td>{countryOfOrigin}</td>
                            </tr>
                            <tr>
                                <td>grade</td>
                                <td>{grade}</td>
                            </tr>
                            <tr>
                                <td>category</td>
                                <td>{category}</td>
                            </tr>
                            <tr>
                                <td>classification</td>
                                <td>{classification}</td>
                            </tr>
                            <tr>
                                <td>harvest season</td>
                                <td>{harvestSeason}</td>
                            </tr>
                        </tbody>
                    </Table>
                    {/*<Card.Body>*/}
                    {/*    <Card.Link href="#">Card Link</Card.Link>*/}
                    {/*    <Card.Link href="#">Another Link</Card.Link>*/}
                    {/*</Card.Body>*/}
                </Card>
                    ))}
            </div>
        </div>
        // <div className="ComponentsDetails">
        //     <h1>Component Details</h1>
        //     {loading && <div>A moment please...</div>}
        //     {error && (
        //         <div>{`There is a problem fetching the post data - ${error}`}</div>
        //     )}
        //     <ul>
        //         {componentDetails &&
        //             componentDetails.map(({ id, name, price, height, weight, color, countryOfOrigin, grade, category, classification, harvestSeason }) => (
        //                 <li key={id}>
        //                     <div className="text-center">
        //                         <img src="https://img.freepik.com/premium-photo/fresh-fruit-background-as-healthy-eating-dieting-concept-winter-assortment-top-view_501761-506.jpg?w=250"/>
        //                     </div>
        //                     <h2>{id}</h2>
        //                     <h3>name: Mango{name}</h3>
        //                     <h4>price: 2{price}</h4>
        //                     <h4>height: 12{height}</h4>
        //                     <h4>weight: 700{weight}</h4>
        //                     <h4>color: green{color}</h4>
        //                     <h4>countryOfOrigin: India{countryOfOrigin}</h4>
        //                     <h4>grade: H. I{grade}</h4>
        //                     <h4>category: fleshy{category}</h4>
        //                     <h4>classification: Tropical fruit{classification}</h4>
        //                     <h4>harvestSeason: summer{harvestSeason}</h4>
        //                 </li>
        //             ))}
        //     </ul>
        // </div>
    );
}
