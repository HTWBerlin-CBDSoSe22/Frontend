import React, {Component} from "react";
import axios from "axios";
import data from "bootstrap/js/src/dom/data";


const api = axios.create({
    baseURL: `http://localhost:8080/components`
})

class GetSomeDate extends Component{

    state = {
        components: []
    }
    constructor(){
        super();
        this.getComponents();
    }

    getComponents = async () => {
        let data = await api.get('/').then(({ data }) => data);
        this.setState({ components: data})
    }

    createComponents = async () => {
        let res = await api.post('/', {name: "Uhlala",
        price: 33, height: 3, weight: 330, color: "orange-white", countryOfOrigin: "Sweden", grade: "three",
        category: "very wet", classification: "king fruit", harvestSeason: "Spring"})
        console.log(res)
        this.getComponents();
    }

    deleteComponents = async () => {
        // eslint-disable-next-line no-undef
        let data = await api.delete(`/${id}`)
        this.getComponents();
    }
    render(){
        return(
            <React.Fragment>
                <div>
                    <h1>Hello Data</h1>
                    <button onClick={this.createComponents}>
                        createComponents
                    </button>
                    {this.state.components.map(components => <h2
                        key={components.id}>{components.name}
                    <button onClick={()=>this.deleteComponents(components.id)}>x</button></h2>)}
                </div>
            </React.Fragment>
        );
    }
}

// https://www.youtube.com/watch?v=12l6lkW6JhE axios
export default GetSomeDate;
