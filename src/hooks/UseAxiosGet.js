import React, {useEffect, useState} from "react";
import axios from "axios";

export default function UseAxiosGet(url) {

    const [request, setRequest] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() => {
        setRequest({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
            .then(response => {
                setRequest({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(() => {
                setRequest({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url]);

    return request;


    // const [productDetails, setProductDetails] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    //
    // useEffect(() => {
    //     const getProductDetails = async () => {
    //         try {
    //             const response = await axios.get(
    //                 // `https://jsonplaceholder.typicode.com/posts?_limit=10`
    //                 // `https://jsonplaceholder.typicode.com/todos?_limit=1`
    //                 `http://localhost:8088/products`
    //             );
    //             setProductDetails(response.data);
    //             setError(null);
    //         } catch (err) {
    //             setError(err.message);
    //             setProductDetails(null);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     getProductDetails();
    // }, []);
}
