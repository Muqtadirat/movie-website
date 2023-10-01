import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form, Navbar, Nav } from "react-bootstrap";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search-results/${query}`);
  };

  return (
    <Navbar expand="lg" className="SearchBar">
      <Container>
        <div className="d-flex align-items-center justify-content-between w-100">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand>MovieBox</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Form className="d-flex" autoComplete="off">
              <Form.Control
                type="search"
                placeholder="What do you want to watch?"
                className="me-2"
                style={{ width: "400px", margin: "auto 18rem" }}
                aria-label="Search"
                name="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button variant="outline-success" onClick={handleSearch}>
                Search
              </Button>
            </Form>
          </Nav>
          <Nav.Link href="#link">Sign In</Nav.Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default SearchBar;
