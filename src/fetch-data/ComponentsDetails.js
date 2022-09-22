import "../css/index.css";
import {Table} from "react-bootstrap";
import UseAxiosGet from "../hooks/UseAxiosGet";
import CustomCard from "../components/CustomCard";

export default function ComponentsDetails(props) {

    let componentDetailsRequestUrl = 'http://localhost:8088/components/' + props.componentId;

    let request = UseAxiosGet(componentDetailsRequestUrl);

    let content = null;

    let componentDetails = [];

    const showComponentDetails = () => {
        componentDetails.push(
            <div>
                <tr>
                    <td>name</td>
                    <td>{request.data.name}</td>
                </tr>
                <tr>
                    <td>price</td>
                    <td>{request.data.price}</td>
                </tr>
                <tr>
                    <td>height</td>
                    <td>{request.data.height}</td>
                </tr>
                <tr>
                    <td>weight</td>
                    <td>{request.data.weight}</td>
                </tr>
                <tr>
                    <td>color</td>
                    <td>{request.data.color}</td>
                </tr>
                <tr>
                    <td>country of origin</td>
                    <td>{request.data.countryOfOrigin}</td>
                </tr>
                <tr>
                    <td>grade</td>
                    <td>{request.data.grade}</td>
                </tr>
                <tr>
                    <td>category</td>
                    <td>{request.data.category}</td>
                </tr>
                <tr>
                    <td>classification</td>
                    <td>{request.data.classification}</td>
                </tr>
                <tr>
                    <td>harvest season</td>
                    <td>{request.data.harvestSeason}</td>
                </tr>
            </div>
        )
    }

    if (request.error) {
        content =
            <p>There is a problem fetching the post data.</p>
    }
    if (request.loading) {
        content =
            <p>A moment please...</p>
    }

    if (request.data) {
        showComponentDetails();
        content =
            <div>
                <h1>Component Details</h1>
                <div>
                    <CustomCard content={
                        <div>
                            <h2>Component 01</h2>
                            <img variant="top" src={require("../assets/fruits_banner.jpeg")}/>
                            <Table responsive
                                   style={{marginTop: "1rem"}} striped bordered hover>
                                <thead>
                                <tr>
                                    <th style={{width: "200px"}}>Name</th>
                                    <th>Description</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {componentDetails}
                                </tbody>
                            </Table>
                        </div>
                    }>
                    </CustomCard>
                    ))}
                </div>
            </div>
    }

    return (
        <div>
            {content}
        </div>
    );
}
