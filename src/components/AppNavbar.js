import { Badge, Container, Navbar, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const AppNavbar = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const calculateTotal = () => {
    if (cartItems) {
      const total = cartItems.reduce(
        (currValue, item) => currValue + item.price * item.quantity,
        0
      );
      return total.toFixed(2);
    }
  };

  return (
    <Navbar sticky="top" bg="dark" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand>MyStore</Navbar.Brand>
        </Link>
        <Link to="/cart">
          <Button variant="primary">
            Your cart <Badge bg="secondary">{cartItems?.length}</Badge>
            <span className="visually-hidden">Your cart</span>
          </Button>
        </Link>
        <h3 style={{ color: "white" }}>Total: {calculateTotal()}</h3>
      </Container>
    </Navbar>
  );
};
