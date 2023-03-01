import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"

const Template=()=>{
    return(
        <Navbar
        bg="success"
            variant="light"
            extend="sm"
            >

             <Container>
        <Navbar.Brand href="#home">
            <img
            src="/logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Formatio React"

            />
            {" "}
            Formation React

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>

            </Navbar>

    )
}
export default Template;