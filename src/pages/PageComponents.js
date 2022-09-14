import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import ComponentsDetails from "../fetch-data/ComponentsDetails";


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
                        <ComponentsDetails />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PageComponents;
