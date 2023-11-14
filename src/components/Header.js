import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Header = () => {
  return (
    
    <Navbar>
        <Container>
          <Navbar.Brand href="#home">FASTECH</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">   Home </Nav.Link>
            <Nav.Link href="#features">My Profile</Nav.Link>
            <Nav.Link href="#pricing"> Activity </Nav.Link>
            <Nav.Link href="#pricing">How it Works </Nav.Link>
          
          </Nav>
        </Container>
      </Navbar>
  ); 
}

export default Header;