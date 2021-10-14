import "./Navbar.css";
import logo2 from "../../../images/logo-removebg-preview.png";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navbarr = () => {
 

  function hidden () {
    document.getElementById('h3Hidden').classList.toggle('d-none')
  }

  return (
  
    <div className="bg-img">
      <Navbar
        collapseOnSelect
        className="justify-content-center"
        expand="md"
        variant="dark"
      >
        <Container style={{marginTop :-15}} >
        <Navbar.Brand  className="d-lg-none d-md-none" href="/">ALSUFRAA </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={hidden} />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="justify-content-center" style={{ flex: 1 }}>
              <Nav.Item>
                <Nav.Link className="a" href="/product">
                  Product
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="a" href="/aboutUS">
                  About us
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="a" href="/">
                  <img
                    className="logo-img"
                    src={logo2}
                    alt="logo"
                    width="70"
                    height="70"
                  />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="a" href="/contactus">
                  contact us
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="a" href="/gallery">
                  Gallery
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h3 id='h3Hidden'>
        <span>FOR THE LOVE OF Alsufara product</span>
      </h3>
    </div>
    
  );
};

export default Navbarr;

