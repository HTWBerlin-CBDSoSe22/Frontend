import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ShowProductDetails from "../fetch-data/ShowProductDetails";
import PostProduct from "../fetch-data/PostProduct";
import UseAxiosGet from "../hooks/UseAxiosGet";


function PageProducts(){

    const url = 'http://localhost:8088/products';

    let request = UseAxiosGet(url)

    let content = null;

    if (request.error) {
        content =
            <p>There is a problem fetching the post data.</p>
    }
    if (request.loading) {
        content =
            <p>A moment please...</p>
    }
    if (request.data) {
        console.log(request.data);
        content =
            request.data.map(({
                name
            }) => (
                <div>
                    <h1>View & Create Products</h1>
                    <Row>
                        <Col>
                            <h1>Products</h1>
                            <Card style={{
                                width: '39rem',
                                height: '34.5rem',
                                textAlign: "center",
                                letterSpacing: "10px",
                                borderRadius: "5px",
                                border: "solid"
                            }}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <button type="button" className="btn btn-outline-success">{name}</button>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <button type="button" className="btn btn-outline-success">{name}</button>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <button type="button" className="btn btn-outline-success">ORANGE</button>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                        <Col>
                            <ShowProductDetails/>
                        </Col>
                    </Row>
                    <PostProduct/>
                </div>
            ))}

    return (

        <div>
            {content}
        </div>

        // <div className="ShowProductDetails">
        //     <h1>Product Details</h1>
        //     {loading && <div>A moment please...</div>}
        //     {error && (
        //         <div>{`There is a problem fetching the post data - ${error}`}</div>
        //     )}
        //     <ul>
        //         {productDetails &&
        //             productDetails.map(({ id, name, consistsOf, price}) => (
        //                 <li key={id}>
        //                     <div className="text-center">
        //                         <img src="https://img.freepik.com/premium-photo/fresh-fruit-background-as-healthy-eating-dieting-concept-winter-assortment-top-view_501761-506.jpg?w=250"/>
        //                     </div>
        //                     <h2>id: {id}</h2>
        //                     <h3>name: {name}</h3>
        //                     <h4>consists of: </h4>
        //                     {/*<div>{consistsOf.sort((a,b) => a.name - b.name)}</div>*/}
        //                     <h6> {consistsOf[0].name}, {consistsOf[0].price}, {consistsOf[0].height} <br></br>
        //                         {consistsOf[1].name}, {consistsOf[1].price}, {consistsOf[1].height} <br></br>
        //                         {consistsOf[2].name}, {consistsOf[2].price}, {consistsOf[2].height}</h6>
        //                     {/*<h4>content: Mango, Kiwi, Apple{consistsOf[0].name}, {consistsOf[1].name}, {consistsOf[2].name}</h4>*/}
        //                 </li>
        //             ))}
        //     </ul>
        // </div>
    );

    // ----------- old ------------
    // return(
    //     <div>
    //         <h1>View & Create Products</h1>
    //         <Row>
    //             <Col>
    //                 <h1>Products</h1>
    //                 <Card style={{ width: '39rem', height:'34.5rem', textAlign: "center", letterSpacing: "10px", borderRadius:"5px", border:"solid"}}>
    //                     <ListGroup variant="flush">
    //                         <ListGroup.Item><button type="button" class="btn btn-outline-success">APPLE</button></ListGroup.Item>
    //                         <ListGroup.Item><button type="button" class="btn btn-outline-success">BANANA</button></ListGroup.Item>
    //                         <ListGroup.Item><button type="button" class="btn btn-outline-success">ORANGE</button></ListGroup.Item>
    //                         <ListGroup.Item><button type="button" class="btn btn-outline-success">STRAWBERRY</button></ListGroup.Item>
    //                         <ListGroup.Item><button type="button" class="btn btn-outline-success">BLUEBERRY</button></ListGroup.Item>
    //                         <ListGroup.Item><button type="button" class="btn btn-outline-success">MANGO</button></ListGroup.Item>
    //                         <ListGroup.Item><button type="button" class="btn btn-outline-success">CHERRY</button></ListGroup.Item>
    //                         <ListGroup.Item><button type="button" class="btn btn-outline-success">PINEAPPLE</button></ListGroup.Item>
    //                         <ListGroup.Item><button type="button" class="btn btn-outline-success">GRAPE</button></ListGroup.Item>
    //                         <ListGroup.Item><button type="button" class="btn btn-outline-success">SOME FRUIT</button></ListGroup.Item>
    //                     </ListGroup>
    //                 </Card>
    //             </Col>
    //             {/*<Col>*/}
    //             {/*    <h1>Products</h1>*/}
    //             {/*    <Card style={{ width: '38rem' , textAlign: "center", letterSpacing: "10px"}}>*/}
    //             {/*        <Card.Header>Featured</Card.Header>*/}
    //             {/*        <ListGroup variant="flush">*/}
    //             {/*            <ListGroup.Item><button>Pantheon Salad</button></ListGroup.Item>*/}
    //             {/*            <ListGroup.Item><button>Thor Salad</button></ListGroup.Item>*/}
    //             {/*            <ListGroup.Item><button>Luigi Salad</button></ListGroup.Item>*/}
    //             {/*            <ListGroup.Item><button>-</button></ListGroup.Item>*/}
    //             {/*            <ListGroup.Item><button>-</button></ListGroup.Item>*/}
    //             {/*            <ListGroup.Item><button>-</button></ListGroup.Item>*/}
    //             {/*            <ListGroup.Item><button>-</button></ListGroup.Item>*/}
    //             {/*            <ListGroup.Item><button>-</button></ListGroup.Item>*/}
    //             {/*            <ListGroup.Item><button>-</button></ListGroup.Item>*/}
    //             {/*            <ListGroup.Item><button>-</button></ListGroup.Item>*/}
    //             {/*        </ListGroup>*/}
    //             {/*    </Card>*/}
    //             {/*</Col>*/}
    //
    //             <Col>
    //                 <ShowProductDetails />
    //             </Col>
    //
    //         </Row>
    //         <PostProduct />
    //     </div>
    // );
}

export default PageProducts;
