import {Component, useState} from "react";
// import axios from "axios";
import Button from "react-bootstrap/Button";
import axios from "axios";
import CustomButton from "../components/CustomButton";

function CreateProduct(props) {

    const [postData, setPostData] = useState({
        // [TEST API POST]
        // userId: '',
            // // id: '',
            // title: '',
            // body: ''
        productId: 3,
        consistsOf: props.consistsOf,
        name: "krassesProduct8"
    });

    const handleClick = () => {
        axios.post('http://localhost:8088/products?newCurrency="USD"', postData)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    // [TEST API POST]
    // const [contentPostData, setContentPostData] = useState("")
    //
    // const changeHandler = (e) => {
    //     setPostData({...postData, [e.target.name]: e.target.value })
    // }
    //
    // const submitHandler = (e) => {
    //     e.preventDefault()
    //     console.log(postData)
    //     setContentPostData(
    //         <div>
    //             <h3>{postData.userId}</h3>
    //             {/*<h3>{postData.id}</h3>*/}
    //             <h3>{postData.title}</h3>
    //             <h3>{postData.body}</h3>
    //         </div>
    //     )
    //     axios.post('https://jsonplaceholder.typicode.com/posts', postData)
    //         .then(response => {
    //             console.log(response)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }

    // [TEST API POST]
    // const { userId, title, body } = postData;
    return(
        <div>
            <CustomButton buttonClick={() => handleClick()} buttonName={"createProduct"}></CustomButton>

            {/*[TEST API POST]*/}
            {/*<form onSubmit={submitHandler}>*/}
            {/*    <div>*/}
            {/*        <input type="text" name="userId" value={userId} onChange={changeHandler}/>*/}
            {/*    </div>*/}
            {/*    /!*<div>*!/*/}
            {/*    /!*    <input type="text" name="id" value={id} onChange={changeHandler}/>*!/*/}
            {/*    /!*</div>*!/*/}
            {/*    <div>*/}
            {/*        <input type="text" name="title" value={title} onChange={changeHandler}/>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <input type="text" name="body" value={body} onChange={changeHandler}/>*/}
            {/*    </div>*/}
            {/*    <button type="submit">Submit</button>*/}
            {/*    {contentPostData}*/}
            {/*</form>*/}

            {/*<button onClick={this.createProduct}>*/}
            {/*    Create Product*/}
            {/*</button>*/}
            {/*<button onClick={this.deleteComponents}>*/}
            {/*    Delete Product*/}
            {/*</button>*/}
        </div>
    );
}

export default CreateProduct;
