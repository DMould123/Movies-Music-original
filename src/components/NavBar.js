import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from 'react-router-dom'
import { Navbar, Nav, NavItem, Container } from 'react-bootstrap'
import Home from './Home'
import Books from './Books'
import Contact from './Contact'

function NavBar() {
  const Styles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'italic'
    }
  }
  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand
              className="logo"
              style={{ fontSize: '1.8rem', marginLeft: '-225px' }}
              href="#home"
            >
              <img
                src={'../.././images/logo.png'}
                alt=""
                style={{ width: '300px', height: '80px' }}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <NavItem>
                  <NavLink style={Styles} className="nav-link" to="/">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={Styles} className="nav-link" to="/books">
                    Albums
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={Styles} className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </NavItem>
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
