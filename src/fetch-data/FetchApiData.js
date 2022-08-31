import "../css/index.css";
import { useState, useEffect } from "react";

import axios from "axios";

export default function FetchApiData() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(
                    // `https://jsonplaceholder.typicode.com/posts?_limit=10`
                    // `https://jsonplaceholder.typicode.com/todos?_limit=5`
                    `https://jsonplaceholder.typicode.com/photos?_limit=5`
                );
                setData(response.data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);

    return (
        <div className="App">
            <h1>API Posts</h1>
            {loading && <div>A moment please...</div>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            <ul>
                {data &&
                    data.map(({ id, title, body, userId, completed }) => (
                        <li key={id}>
                            <img src="https://img.freepik.com/premium-photo/fresh-fruit-background-as-healthy-eating-dieting-concept-winter-assortment-top-view_501761-506.jpg?w=250"/>
                            <h2>{id}</h2>
                            <h3>{title}</h3>
                            <h4>{completed}</h4>
                            {/*<h5>{url}</h5>*/}
                            <h8>{body}</h8>
                            <br/>
                            <br/>
                            <h10>{userId}</h10>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
