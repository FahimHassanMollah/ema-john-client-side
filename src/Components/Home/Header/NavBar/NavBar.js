import React from 'react';
import { Button, Col, Container, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logo.png';
import './NavBar.css'
const NavBar = () => {
    return (
        <div>
            <Container >
                <Row className="d-flex justify-content-center">
                    <Col md={4}>
                        <Link className="" to={'/'}>
                            <img className="img-fluid 50" src={logo} alt="" />
                        </Link>
                    </Col>
                </Row>
               
            </Container>
           
                  
                   <Navbar bg="dark"  expand="lg">
                       <Container>
                     
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto " >
                               
                                <Nav.Link className="text-white" href='/'>
                                    Shop
                                </Nav.Link>
                                <Nav.Link className="text-white" href="/manageInventory">Manage Inventory</Nav.Link>
                                <Nav.Link className="text-white" href="/orderReview">OrderReview</Nav.Link>
                               
                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                       </Container>
                    </Navbar>
                 
        </div>
    );
};
export default NavBar;