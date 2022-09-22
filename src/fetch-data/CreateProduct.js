import {Component, useEffect, useRef, useState} from "react";
// import axios from "axios";
import Button from "react-bootstrap/Button";
import axios from "axios";
import CustomButton from "../components/CustomButton";
import CustomSubmitForm from "../components/CustomSubmitForm";
import alert from "bootstrap/js/src/alert";
import UseAxiosGet from "../hooks/UseAxiosGet";
import {InputGroup} from "react-bootstrap";

function CreateProduct(props) {
    const [name, setName] = useState("");
    const url = 'http://localhost:8088/products?newCurrency=';
    const urlParam = props.selectedCurrency;
    const isMounted = useRef(false);
    let consistsOfList = [];

    const[createProductStatus, setCreateProductStatus] = useState("...");

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
                adjustCreateProductStatus("CREATED!");
                console.log(response)
            })
            .catch(error => {
                console.log("post data failed!");
                adjustCreateProductStatus("create failed");
                console.log(error)
            })
    }

    const adjustCreateProductStatus = (productStatus) => {
        setCreateProductStatus(productStatus);
        setTimeout(() => {
            setCreateProductStatus("creating...");
        }, 3500);
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
        <div style={{marginTop: '5%'}}>
            {/*{content}*/}
            <form onSubmit={handleClick}>
                    <input
                        type="text"
                        value={name}
                        placeholder="Product Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                <CustomButton type="submit"
                              buttonName={"createProduct"}
                />
            </form>
        </div>
    );
}

export default CreateProduct;
