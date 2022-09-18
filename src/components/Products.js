import React from 'react';
import UseAxiosGet from "../hooks/UseAxiosGet";

// not used...
function Products() {

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
        content = allProductsRequest.data
    }

    return content;
}

export default Products;
