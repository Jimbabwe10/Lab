import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const CustomNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
            <Nav class="navbar navbar-dark bg-dark text-light justify-content-between">
                <form class="form-inline">
                <Nav href="#">Home</Nav>
                <Nav href="#">About</Nav>
                <Nav href="#">Contact</Nav>
                </form>
            </Nav>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </Navbar>
    );
};

export default CustomNavbar;