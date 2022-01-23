import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  return (
    <Card style={{ width: "18rem" }} className="card-shadow p-4">
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        {/* <Card.Text>{item.description}</Card.Text> */}
        <Link to={`/${product.id}`}>
          <Button variant="outline-primary my-2">See more</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
