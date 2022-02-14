import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeItem } from "../reducers/cart";

export const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const onQuantityChange = (e, id) => {
    const quantity = Number(e.target.value);
    dispatch(updateQuantity({ quantity, id }));
  };

  const removeCartItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <Container>
      {!cartItems?.length ? (
        <h1>No Items found</h1>
      ) : (
        cartItems.map((item) => {
          return (
            <Card key={item.id} className="card-shadow p-4 my-2">
              <Row>
                <Col>
                  <img
                    src={item.image}
                    alt="product"
                    height={200}
                    width={200}
                  />
                </Col>
                <Col md={9}>
                  <h4>{item.title}</h4>
                  <strong>
                    <p>${item.price}</p>
                  </strong>
                  <span>Quantity: </span>
                  <input
                    onChange={(e) => onQuantityChange(e, item.id)}
                    value={item.quantity}
                  />
                  <Button
                    onClick={() => removeCartItem(item.id)}
                    className="mx-2"
                    variant="danger"
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            </Card>
          );
        })
      )}
    </Container>
  );
};
