import {Component, useEffect, useRef, useState} from "react";
// import axios from "axios";
import Button from "react-bootstrap/Button";
import axios from "axios";
import CustomButton from "../components/CustomButton";
import CustomSubmitForm from "../components/CustomSubmitForm";
import alert from "bootstrap/js/src/alert";
import UseAxiosGet from "../hooks/UseAxiosGet";

function CreateProduct(props) {
    const [name, setName] = useState("");
    const url = 'http://localhost:8088/products?newCurrency=';
    const urlParam = 'SEK';
    const isMounted = useRef(false);
    let consistsOfList = [];

    const [postData, setPostData] = useState({
        productId: 0,
        consistsOf: [],
        name: ""
    });

    const postRequest = () => {
        console.log("create list length2: " + props.componentListForNewProduct.length)
        axios.post(url + urlParam, postData)
            .then(response => {
                console.log("post data worked!")
                console.log(response)
            })
            .catch(error => {
                console.log("post data failed!");
                console.log(error)
            })
    }

    useEffect(() => {
        if (isMounted.current) {
            postRequest();
        } else {
            console.log("first mount")
            isMounted.current = true;
        }
    }, [postData])

    const handleClick = (event) => {
        event.preventDefault();
        setPostData({
            // productId: props.productId,
            productId: 8,
            consistsOf: props.componentListForNewProduct,
            name: name
        })
        setName("");
        console.log("create list length: " + props.componentListForNewProduct.length)
    }

    return(
        <div>
            {/*{content}*/}
            <form onSubmit={handleClick}>
                <label>Enter your name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <CustomButton type="submit" buttonName={"createProduct"}/>
            </form>
        </div>
    );
}

export default CreateProduct;
