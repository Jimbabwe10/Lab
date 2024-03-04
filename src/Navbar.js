import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const CustomNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="navbar navbar-dark bg-dark justify-content-between">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#About">About</Nav.Link>
                <Nav.Link href="#Contact">Contact</Nav.Link>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </input>
                </form>
            </Nav>
        </Navbar>
    );
};

export default CustomNavbar;