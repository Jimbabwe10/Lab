import React from 'react';
import { Nav } from 'react-bootstrap';

const CustomNavbar = () => {
    return (
        <Nav class="bg-dark variant-dark">
            <a class="navbar-brand" href="#">Navbar</a>
            <Nav class="navbar navbar-dark bg-dark text-light justify-content-between">
                <form class="form-inline">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                </form>
            </Nav>
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </Nav>
    );
};

export default CustomNavbar;