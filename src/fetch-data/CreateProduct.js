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
    let consistsOfList = [{
                "componentId": 7,
                "name": "Cherry",
                "price": 4.4,
                "height": 1.5,
                "weight": 20.0,
                "color": "red",
                "countryOfOrigin": "Germany",
                "grade": "H. extra",
                "category": "fleshy",
                "classification": "Pit",
                "harvestSeason": "summer"
            }];

    const [postData, setPostData] = useState({
        productId: 0,
        consistsOf: [],
        name: ""
    });

    const postRequest = () => {
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
            postRequest();;
        } else {
            console.log("first mount")
            isMounted.current = true;
        }
    }, [postData])

    const handleClick = (event) => {
        event.preventDefault();
        setPostData({
            productId: 8,
            consistsOf: consistsOfList,
            // consistsOf: [
            //     {
            //         "componentId": 7,
            //         "name": "Cherry",
            //         "price": 0.4,
            //         "height": 1.5,
            //         "weight": 20.0,
            //         "color": "red",
            //         "countryOfOrigin": "Germany",
            //         "grade": "H. extra",
            //         "category": "fleshy",
            //         "classification": "Pit",
            //         "harvestSeason": "summer"
            //     },
            //     {
            //         "componentId": 6,
            //         "name": "Mango",
            //         "price": 2.0,
            //         "height": 12.0,
            //         "weight": 700.0,
            //         "color": "green",
            //         "countryOfOrigin": "India",
            //         "grade": "H. I",
            //         "category": "fleshy",
            //         "classification": "Tropical fruit",
            //         "harvestSeason": "summer"
            //     },
            //     {
            //         "componentId": 4,
            //         "name": "Strawberry",
            //         "price": 0.15,
            //         "height": 2.5,
            //         "weight": 25.0,
            //         "color": "red",
            //         "countryOfOrigin": "Spain",
            //         "grade": "H. I",
            //         "category": "fleshy",
            //         "classification": "Berry",
            //         "harvestSeason": "summer"
            //     },
            //     {
            //         "componentId": 8,
            //         "name": "Pineapple",
            //         "price": 3.0,
            //         "height": 25.0,
            //         "weight": 1500.0,
            //         "color": "yellow",
            //         "countryOfOrigin": "Ghana",
            //         "grade": "H. II",
            //         "category": "dry",
            //         "classification": "Tropical fruit",
            //         "harvestSeason": "spring"
            //     },
            //     {
            //         "componentId": 1,
            //         "name": "Banana",
            //         "price": 0.75,
            //         "height": 13.0,
            //         "weight": 120.0,
            //         "color": "yellow",
            //         "countryOfOrigin": "Ecuador",
            //         "grade": "H. extra",
            //         "category": "dry",
            //         "classification": "Tropical fruit",
            //         "harvestSeason": "winter"
            //     },
            //     {
            //         "componentId": 2,
            //         "name": "Apple",
            //         "price": 1.0,
            //         "height": 7.0,
            //         "weight": 200.0,
            //         "color": "green",
            //         "countryOfOrigin": "Germany",
            //         "grade": "H. extra",
            //         "category": "dry",
            //         "classification": "Core",
            //         "harvestSeason": "fall"
            //     }
            // ],
            name: name
        })
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
