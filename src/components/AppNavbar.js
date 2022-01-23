import { Container, Navbar } from "react-bootstrap";

export const AppNavbar = () => {
  return (
    <Navbar sticky="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">MyStore</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
