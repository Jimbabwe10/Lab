import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const CustomNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
            <Nav class="navbar navbar-dark bg-dark text-light justify-content-between">
                <form class="form-inline">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>
                </form>
            </Nav>
            <div class="Navbar-right">
                <input class="form-control mr-sm-1 w-20 ml-auto"ype="search" placeholder="Search" aria-label="Search"></input>
                <button class="btn btn-outline-success my-2 my-sm-0 ml-auto" type="submit">Search</button>
            </div>
        </Navbar>
    );
};

export default CustomNavbar;