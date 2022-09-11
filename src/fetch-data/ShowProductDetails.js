import "../css/index.css";

import {Card, Table} from "react-bootstrap";
import UseAxiosGet from "../hooks/UseAxiosGet";
import {useState} from "react";
import ListGroup from "react-bootstrap/ListGroup";

export default function ShowProductDetails() {
    const url = 'http://localhost:8088/products';

    let request = UseAxiosGet(url)

    let content = null;

    const [fruitImage, setFruitImage] = useState("fruit_product2.jpeg")

    const [dataIndex, setDataIndex] = useState(1);

    // function changeDataIndex(i) {
    //     setDataIndex(i)
    // }

    const handleClick = (name, dataIndex) => {
        console.log("hello " + name + dataIndex)
        setDataIndex(dataIndex);
        if(dataIndex == 0) {
            setFruitImage("fruits_banner.jpeg")
        }
        else if(dataIndex == 1) {
            setFruitImage("fruit_product2.jpeg")
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
        content =
                <div>
                    <button onClick={() => handleClick("mario", 0)} type="button" className="btn btn-outline-success">{request.data[0].name}</button>

                    <button onClick={() => handleClick("luigi", 1)} type="button" className="btn btn-outline-success">{request.data[1].name}</button>

                    <button type="button" className="btn btn-outline-success">ORANGE</button>
                    <h1>Product Details</h1>
                    <div style={{width: '39rem', height: '34.5rem', textAlign: "center", borderRadius: "5px", border: "solid"}}>
                        <Card>
                            <h2>{request.data[dataIndex].name}</h2>
                            <img variant="top" src={require("../assets/" + fruitImage)}/>
                            <Table style={{marginTop: "1rem"}} striped bordered hover>
                                <thead>
                                <tr>
                                    <th style={{width:"200px"}}>Name</th>
                                    <th>Description</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>{request.data[dataIndex].consistsOf[0].name}</td>
                                    <td>{request.data[dataIndex].consistsOf[0].price}</td>
                                </tr>
                                <tr>
                                    <td>{request.data[dataIndex].consistsOf[1].name}</td>
                                    <td>{request.data[dataIndex].consistsOf[1].price}</td>
                                </tr>
                                <tr>
                                    <td>{request.data[dataIndex].consistsOf[2].name}</td>
                                    <td>{request.data[dataIndex].consistsOf[2].price}</td>
                                </tr>
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
    return dataIndex;
}

