import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../reducers/cart";

export const ProductCard = ({ product }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const itemAlreadyExistInCart = cartItems.find(
    (item) => item.id === product.id
  );

  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  return (
    <Card style={{ width: "18rem" }} className="card-shadow p-4">
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Link to={`/${product.id}`}>
          <Button variant="outline-primary my-2">See more</Button>
        </Link>
        {!itemAlreadyExistInCart ? (
          <Button onClick={addToCart} variant="primary my-2 mx-1">
            Add to cart
          </Button>
        ) : (
          <p>Added to cart</p>
        )}
      </Card.Body>
    </Card>
  );
};
