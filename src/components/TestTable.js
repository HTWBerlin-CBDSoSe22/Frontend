import 'bootstrap/dist/css/bootstrap.min.css';
import Col from "react-bootstrap/Col";

function TestTable(){
    return(
        <Col>
            <table className="componentList">
                <tr>
                    <th>APPLE</th>
                </tr>
                <tr>
                    <td>BANANAAA</td>
                </tr>
                <tr>
                    <td>ORANGE</td>
                </tr>
                <tr>
                    <td>STRAWBERRY</td>
                </tr>
                <tr>
                    <td>BLUEBERRY</td>
                </tr>
                <tr>
                    <td>MANGO</td>
                </tr>
                <tr>
                    <td>CHERRY</td>
                </tr>
                <tr>
                    <td>PINEAPPLE</td>
                </tr>
                <tr>
                    <td>GRAPE</td>
                </tr>
            </table>
        </Col>
    );
}

export default TestTable;
