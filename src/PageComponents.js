import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import fruits_small from './assets/fruits_small.jpeg';


function PageComponents(){
    return(
        <div>
            <Row style={{marginTop:"100px", marginLeft: "20%"}}>
                <Col>
                    <Card style={{ width: '28rem' , textAlign: "center", letterSpacing: "10px", display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center"}}>
                        <Card.Header>Featured</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>APPLE</ListGroup.Item>
                            <ListGroup.Item>BANANA</ListGroup.Item>
                            <ListGroup.Item>ORANGE</ListGroup.Item>
                            <ListGroup.Item>STRAWBERRY</ListGroup.Item>
                            <ListGroup.Item>BLUEBERRY</ListGroup.Item>
                            <ListGroup.Item>MANGO</ListGroup.Item>
                            <ListGroup.Item>CHERRY</ListGroup.Item>
                            <ListGroup.Item>PINEAPPLE</ListGroup.Item>
                            <ListGroup.Item>GRAPE</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '28rem' }}>
                        <img className="card-img-top" src={fruits_small} alt="Card image" />
                        <Card.Body style={{textAlign: "center"}} class="card-img-overlay">

                            <Card.Title>Attributes</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">10 Attributes</Card.Subtitle>
                            <div style={{fontSize: '20px'}}>
                                <Card.Text href="#">Attribute 1</Card.Text>
                                <Card.Text href="#">Attribute 2</Card.Text>
                                <Card.Text href="#">Attribute 3</Card.Text>
                                <Card.Text href="#">Attribute 2</Card.Text>
                                <Card.Text href="#">Attribute 2</Card.Text>
                                <Card.Text href="#">Attribute 2</Card.Text>
                                <Card.Text href="#">Attribute 2</Card.Text>
                                <Card.Text href="#">Attribute 2</Card.Text>
                                <Card.Text href="#">Attribute 2</Card.Text>
                                <Card.Text href="#">Attribute 2</Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </div>
    );
}

export default PageComponents;
