import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import CreateProduct from "../fetch-data/CreateProduct";


function PageProducts(){
    return(
        <div>
            <h1>View & Create Products</h1>
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

            <CreateProduct />
        </div>
    );
}

export default PageProducts;
