import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, Container } from 'react-bootstrap'
import Home from './Home'
import Books from './Books'
import Contact from './Contact'

const Styles = ({ isActive }) => ({
  fontWeight: isActive ? 'bold' : 'normal',
  textDecoration: isActive ? 'none' : 'italic'
})

function NavBar() {
  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand
              className="logo"
              style={{ fontSize: '1.8rem', marginLeft: '-225px' }}
              href="/"
            >
              <img
                src="../.././images/logo.png"
                alt=""
                style={{ width: '300px', height: '80px' }}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="/"
                    style={Styles}
                    className="nav-link"
                  >
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="/books"
                    style={Styles}
                    className="nav-link"
                  >
                    Albums
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="/contact"
                    style={Styles}
                    className="nav-link"
                  >
                    Contact
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Books />} path="/books" />
          <Route element={<Contact />} path="/contact" />
        </Routes>
      </div>
    </Router>
  )
}

export default NavBar
