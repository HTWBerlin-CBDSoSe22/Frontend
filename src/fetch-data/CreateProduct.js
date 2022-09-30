import {useEffect, useRef, useState} from "react";
import axios from "axios";
import CustomButton from "../components/CustomButton";
import {Overlay, Tooltip} from "react-bootstrap";

function CreateProduct(props) {
    const [name, setName] = useState("");
    const url = 'http://localhost:8088/products?newCurrency=';
    const urlParam = props.selectedCurrency;
    const isMounted = useRef(false);
    const target = useRef(null);

    const [createProductStatus, setCreateProductStatus] = useState(false);
    const [showCreateProductFeedback, setShowCreateProductFeedback] = useState("");
    const [buttonStatus, setButtonStatus] = useState(false);

    const [postData, setPostData] = useState({
        consistsOf: [],
        name: ""
    });

    const postRequest = () => {
        axios.post(url + urlParam, postData)
            .then(response => {
                adjustCreateProductStatus("CREATED!");
                setButtonStatus(false);
            })
            .catch(error => {
                adjustCreateProductStatus("create failed");
                setButtonStatus(false);
            })
    }

    const adjustCreateProductStatus = (productStatus) => {
        setShowCreateProductFeedback(productStatus);
        setTimeout(() => {
            setCreateProductStatus(false);
        }, 3500);
    }

    useEffect(() => {
        if (isMounted.current) {
            postRequest();
        } else {
            // first mount
            isMounted.current = true;
        }
    }, [postData])

    const handleClick = (event) => {
        event.preventDefault();
        setButtonStatus(true);
        setPostData({
            consistsOf: props.componentListForNewProduct,
            name: name
        })
        setName("");
        setCreateProductStatus(!createProductStatus);
    }

    return(
        <div style={{marginTop: '5%'}}>
            <form ref={target} onSubmit={handleClick}>
                    <input
                        type="text"
                        value={name}
                        placeholder="Product Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                <CustomButton
                    type="submit"
                    disabled={buttonStatus}
                    buttonName={"Create Product"}
                />
                <Overlay target={target.current} show={createProductStatus} placement="top-end">
                    {(props) => (
                        <Tooltip id="overlay-example" {...props}>
                            {showCreateProductFeedback}
                        </Tooltip>
                    )}
                </Overlay>
            </form>
        </div>
    );
}

export default CreateProduct;
