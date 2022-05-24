import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";


function PageComponents(){
    return(
        <div>
            <Container style={{ margin: '60px'}}>
                <Row>
                    <Col>
                        <Card style={{ width: '38rem' , textAlign: "center", letterSpacing: "10px"}}>
                            <Card.Header>Featured</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item><button>APPLE</button></ListGroup.Item>
                                <ListGroup.Item><button>BANANA</button></ListGroup.Item>
                                <ListGroup.Item><button>ORANGE</button></ListGroup.Item>
                                <ListGroup.Item><button>STRAWBERRY</button></ListGroup.Item>
                                <ListGroup.Item><button>BLUEBERRY</button></ListGroup.Item>
                                <ListGroup.Item><button>MANGO</button></ListGroup.Item>
                                <ListGroup.Item><button>CHERRY</button></ListGroup.Item>
                                <ListGroup.Item><button>PINEAPPLE</button></ListGroup.Item>
                                <ListGroup.Item><button>GRAPE</button></ListGroup.Item>
                                <ListGroup.Item><button>SOME FRUIT</button></ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '38rem' , textAlign: "center", letterSpacing: "10px"}}>
                            <Card.Header>Featured</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>ATTRIBUTE 1</ListGroup.Item>
                                <ListGroup.Item>ATTRIBUTE 2</ListGroup.Item>
                                <ListGroup.Item>ATTRIBUTE 3</ListGroup.Item>
                                <ListGroup.Item>ATTRIBUTE 4</ListGroup.Item>
                                <ListGroup.Item>ATTRIBUTE 5</ListGroup.Item>
                                <ListGroup.Item>ATTRIBUTE 6</ListGroup.Item>
                                <ListGroup.Item>ATTRIBUTE 7</ListGroup.Item>
                                <ListGroup.Item>ATTRIBUTE 8</ListGroup.Item>
                                <ListGroup.Item>ATTRIBUTE 9</ListGroup.Item>
                                <ListGroup.Item>ATTRIBUTE 10</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        {/*<Card style={{ width: '38rem' , textAlign: "center", letterSpacing: "10px"}}>*/}
                        {/*    <Card.Body>*/}
                        {/*        <Card.Title>Attributes</Card.Title>*/}
                        {/*        <Card.Subtitle className="mb-2 text-muted">10 Attributes</Card.Subtitle>*/}
                        {/*        <div style={{fontSize: '20px'}}>*/}
                        {/*            <Card.Text href="#">Attribute 1</Card.Text>*/}
                        {/*            <Card.Text href="#">Attribute 2</Card.Text>*/}
                        {/*            <Card.Text href="#">Attribute 3</Card.Text>*/}
                        {/*            <Card.Text href="#">Attribute 2</Card.Text>*/}
                        {/*            <Card.Text href="#">Attribute 2</Card.Text>*/}
                        {/*            <Card.Text href="#">Attribute 2</Card.Text>*/}
                        {/*            <Card.Text href="#">Attribute 2</Card.Text>*/}
                        {/*            <Card.Text href="#">Attribute 2</Card.Text>*/}
                        {/*            <Card.Text href="#">Attribute 2</Card.Text>*/}
                        {/*            <Card.Text href="#">Attribute 2</Card.Text>*/}
                        {/*        </div>*/}
                        {/*    </Card.Body>*/}
                        {/*</Card>*/}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PageComponents;
