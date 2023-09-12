import React from "react";
import MovieList from "./MovieList";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Container,
  Form,
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";

function SearchBar(props) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary SeachBar">
      <Container>
        <Navbar.Brand href="#home">MovieBox</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Form
              className="d-flex"
              onSubmit={props.searchMovie}
              autoComplete="off"
            >
              <Form.Control
                type="search"
                placeholder="What do you want to watch?"
                className="me-2 "
                aria-label="Search"
                name="query"
                value={props.query}
                onChange={props.changeHandler}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav.Link href="#link">Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      
    </Navbar>
  );
}

export default SearchBar;
