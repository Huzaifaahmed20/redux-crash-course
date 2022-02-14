import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setproduct] = useState({});

  const [isBusy, setIsBusy] = useState(false);

  const fetchProduct = async () => {
    setIsBusy(true);
    const res = await (
      await fetch(`https://fakestoreapi.com/products/${productId}`)
    ).json();
    setproduct(res);
    setIsBusy(false);
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <Container className="d-flex justify-content-center" fluid>
      {isBusy ? (
        <Spinner animation="border" />
      ) : (
        <Row className="mt-4 p-5">
          <Col>
            <img src={product.image} alt="product" height={300} />
          </Col>
          <Col md={10} className="mx-3">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h4>${product.price}</h4>
            <p>
              Rating: {product.rating?.rate} ({product.rating?.count})
            </p>
          </Col>
        </Row>
      )}
    </Container>
  );
};
