import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import ShowComponentsDetails from "../fetch-data/ShowComponentsDetails";


function PageComponents(){
    return(
        <div>
            <Container style={{ margin: '60px'}}>
                <Row>
                    <Col>
                        <h1>Components</h1>
                        <Card style={{ width: '39rem', height:'34.5rem', textAlign: "center", letterSpacing: "10px", borderRadius:"5px", border:"solid"}}>
                            {/*<Card.Header>Featured</Card.Header>*/}
                            <ListGroup variant="flush">
                                <ListGroup.Item><button type="button" class="btn btn-outline-success">APPLE</button></ListGroup.Item>
                                <ListGroup.Item><button type="button" class="btn btn-outline-success">BANANA</button></ListGroup.Item>
                                <ListGroup.Item><button type="button" class="btn btn-outline-success">ORANGE</button></ListGroup.Item>
                                <ListGroup.Item><button type="button" class="btn btn-outline-success">STRAWBERRY</button></ListGroup.Item>
                                <ListGroup.Item><button type="button" class="btn btn-outline-success">BLUEBERRY</button></ListGroup.Item>
                                <ListGroup.Item><button type="button" class="btn btn-outline-success">MANGO</button></ListGroup.Item>
                                <ListGroup.Item><button type="button" class="btn btn-outline-success">CHERRY</button></ListGroup.Item>
                                <ListGroup.Item><button type="button" class="btn btn-outline-success">PINEAPPLE</button></ListGroup.Item>
                                <ListGroup.Item><button type="button" class="btn btn-outline-success">GRAPE</button></ListGroup.Item>
                                <ListGroup.Item><button type="button" class="btn btn-outline-success">SOME FRUIT</button></ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col>
                        <ShowComponentsDetails />
                    {/*    <Card style={{ width: '38rem' , textAlign: "center", letterSpacing: "10px"}}>*/}
                    {/*        <Card.Header>Featured</Card.Header>*/}
                    {/*        <ListGroup variant="flush">*/}
                    {/*            <ListGroup.Item>ATTRIBUTE 1</ListGroup.Item>*/}
                    {/*            <ListGroup.Item>ATTRIBUTE 2</ListGroup.Item>*/}
                    {/*            <ListGroup.Item>ATTRIBUTE 3</ListGroup.Item>*/}
                    {/*            <ListGroup.Item>ATTRIBUTE 4</ListGroup.Item>*/}
                    {/*            <ListGroup.Item>ATTRIBUTE 5</ListGroup.Item>*/}
                    {/*            <ListGroup.Item>ATTRIBUTE 6</ListGroup.Item>*/}
                    {/*            <ListGroup.Item>ATTRIBUTE 7</ListGroup.Item>*/}
                    {/*            <ListGroup.Item>ATTRIBUTE 8</ListGroup.Item>*/}
                    {/*            <ListGroup.Item>ATTRIBUTE 9</ListGroup.Item>*/}
                    {/*            <ListGroup.Item>ATTRIBUTE 10</ListGroup.Item>*/}
                    {/*        </ListGroup>*/}
                    {/*    </Card>*/}
                    {/*    /!*<Card style={{ width: '38rem' , textAlign: "center", letterSpacing: "10px"}}>*!/*/}
                    {/*    /!*    <Card.Body>*!/*/}
                    {/*    /!*        <Card.Title>Attributes</Card.Title>*!/*/}
                    {/*    /!*        <Card.Subtitle className="mb-2 text-muted">10 Attributes</Card.Subtitle>*!/*/}
                    {/*    /!*        <div style={{fontSize: '20px'}}>*!/*/}
                    {/*    /!*            <Card.Text href="#">Attribute 1</Card.Text>*!/*/}
                    {/*    /!*            <Card.Text href="#">Attribute 2</Card.Text>*!/*/}
                    {/*    /!*            <Card.Text href="#">Attribute 3</Card.Text>*!/*/}
                    {/*    /!*            <Card.Text href="#">Attribute 2</Card.Text>*!/*/}
                    {/*    /!*            <Card.Text href="#">Attribute 2</Card.Text>*!/*/}
                    {/*    /!*            <Card.Text href="#">Attribute 2</Card.Text>*!/*/}
                    {/*    /!*            <Card.Text href="#">Attribute 2</Card.Text>*!/*/}
                    {/*    /!*            <Card.Text href="#">Attribute 2</Card.Text>*!/*/}
                    {/*    /!*            <Card.Text href="#">Attribute 2</Card.Text>*!/*/}
                    {/*    /!*            <Card.Text href="#">Attribute 2</Card.Text>*!/*/}
                    {/*    /!*        </div>*!/*/}
                    {/*    /!*    </Card.Body>*!/*/}
                    {/*    /!*</Card>*!/*/}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PageComponents;
