import { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { ProductCard } from "../components";

export const Products = () => {
  const [products, setproducts] = useState([]);

  const fetchProducts = async () => {
    const res = await (await fetch("https://fakestoreapi.com/products")).json();
    setproducts(res);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Container>
        {!products.length ? (
          <Spinner animation="border" />
        ) : (
          <Row>
            {products.map((product) => {
              return (
                <Col key={product.id} className="my-3">
                  <ProductCard product={product} />
                </Col>
              );
            })}
          </Row>
        )}
      </Container>
    </>
  );
};
