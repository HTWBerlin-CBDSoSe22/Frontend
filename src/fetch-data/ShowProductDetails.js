import "../css/index.css";

import {Card, Table} from "react-bootstrap";
import UseAxiosGet from "../hooks/UseAxiosGet";

export default function ShowProductDetails() {
    const url = 'http://127.0.0.1:8088/products';

    let request = UseAxiosGet(url)

    let content = null;

    if (request.error) {
        content =
            <p>There is a problem fetching the post data.</p>
    }
    if (request.loading) {
        content =
            <p>A moment please...</p>
    }
    if (request.data) {
        content =
            request.data.map(({
                name, consistsOf
            }) => (
                <div>
                    <h1>Product Details</h1>
                    <div style={{width: '39rem', height: '34.5rem', textAlign: "center", borderRadius: "5px", border: "solid"}}>
                        <Card>
                            <h2>Product 01</h2>
                            <img variant="top" src={require("../assets/fruits_banner.jpeg")}/>
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
                                    <td>{consistsOf[1].price}</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Card>
                    </div>
                </div>
            ))}

    return (

        <div>
            {content}
        </div>

        // <div className="ShowProductDetails">
        //     <h1>Product Details</h1>
        //     {loading && <div>A moment please...</div>}
        //     {error && (
        //         <div>{`There is a problem fetching the post data - ${error}`}</div>
        //     )}
        //     <ul>
        //         {productDetails &&
        //             productDetails.map(({ id, name, consistsOf, price}) => (
        //                 <li key={id}>
        //                     <div className="text-center">
        //                         <img src="https://img.freepik.com/premium-photo/fresh-fruit-background-as-healthy-eating-dieting-concept-winter-assortment-top-view_501761-506.jpg?w=250"/>
        //                     </div>
        //                     <h2>id: {id}</h2>
        //                     <h3>name: {name}</h3>
        //                     <h4>consists of: </h4>
        //                     {/*<div>{consistsOf.sort((a,b) => a.name - b.name)}</div>*/}
        //                     <h6> {consistsOf[0].name}, {consistsOf[0].price}, {consistsOf[0].height} <br></br>
        //                         {consistsOf[1].name}, {consistsOf[1].price}, {consistsOf[1].height} <br></br>
        //                         {consistsOf[2].name}, {consistsOf[2].price}, {consistsOf[2].height}</h6>
        //                     {/*<h4>content: Mango, Kiwi, Apple{consistsOf[0].name}, {consistsOf[1].name}, {consistsOf[2].name}</h4>*/}
        //                 </li>
        //             ))}
        //     </ul>
        // </div>
    );
}

