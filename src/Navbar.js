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
                <input class="form-control mr-sm-1" ype="search" placeholder="Search" aria-label="Search"></input>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </Navbar>
    );
};

export default CustomNavbar;