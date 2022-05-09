import { Button, Card, Col, Row } from "react-bootstrap";

function Cards({ data }) {
  return (
    <Row className="justify-content-center">
      {data?.map((items) => {
        return (
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{items.rocket.rocket_name}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default Cards;
