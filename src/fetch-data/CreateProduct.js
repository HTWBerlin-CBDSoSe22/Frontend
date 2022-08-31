import {Component} from "react";
// import axios from "axios";
import Button from "react-bootstrap/Button";



// const api = axios.create({
//     baseURL: `http://localhost:8080/components`
// })

class CreateProduct extends Component {

    createProduct = async () => {
        console.log("Product created")
    }

    deleteComponents = async () => {
        // eslint-disable-next-line no-undef
        console.log("Product deleted")
    }

    render(){
        return(
            <div>
                <button onClick={this.createProduct}>
                    Create Product
                </button>
                <button onClick={this.deleteComponents}>
                    Delete Product
                </button>
            </div>
        );
    }
}

export default CreateProduct;
