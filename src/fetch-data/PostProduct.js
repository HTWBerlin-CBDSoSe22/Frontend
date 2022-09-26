import "../css/index.css";
import { useState, useEffect } from "react";

import axios from "axios";

export default function PostProduct(props) {
    const [createdProductDetails, setCreatedProductDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCreatedProductDetails = async () => {
            const data = {
                title: "drink water",
                body: "I should drink water",
                userId: 3
            };
            const headers = { "header-name": "value" };
            const config = { headers, };
            try {
                const response = await axios.post(
                    `https://jsonplaceholder.typicode.com/posts?_limit=10`, data, headers, config
                    // `https://jsonplaceholder.typicode.com/todos?_limit=1`
                    // `http://localhost:8088/products`
                );
                setCreatedProductDetails(response.data);
                setError(null);
                console.log(createdProductDetails)
            } catch (err) {
                setError(err.message);
                setCreatedProductDetails(null);
            } finally {
                setLoading(false);
            }
        };
        getCreatedProductDetails();
    }, []);

    return (
        <div className="PostProduct">
            <h1>Created Product Details [in progress...]</h1>
            {loading && <div>A moment please...</div>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            {/*<ul>*/}
            {/*    {createdProductDetails &&*/}
            {/*        createdProductDetails.map(({ title, body, userId) => (*/}
            {/*            <li key={id}>*/}
            {/*                <div className="text-center">*/}
            {/*                    <img src="https://img.freepik.com/premium-photo/fresh-fruit-background-as-healthy-eating-dieting-concept-winter-assortment-top-view_501761-506.jpg?w=250"/>*/}
            {/*                </div>*/}
            {/*                <h2>id: {id}</h2>*/}
            {/*                <h3>name: {name}</h3>*/}
            {/*                <h4>consists of: </h4>*/}
            {/*                /!*<div>{consistsOf.sort((a,b) => a.name - b.name)}</div>*!/*/}
            {/*                <h6> {consistsOf[0].name}, {consistsOf[0].price}, {consistsOf[0].height} <br></br>*/}
            {/*                    {consistsOf[1].name}, {consistsOf[1].price}, {consistsOf[1].height} <br></br>*/}
            {/*                    {consistsOf[2].name}, {consistsOf[2].price}, {consistsOf[2].height}</h6>*/}
            {/*                /!*<h4>content: Mango, Kiwi, Apple{consistsOf[0].name}, {consistsOf[1].name}, {consistsOf[2].name}</h4>*!/*/}
            {/*            </li>*/}
            {/*        ))}*/}
            {/*</ul>*/}
        </div>
    );
}
