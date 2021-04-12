import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import {Link} from "react-router-dom";

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar color="dark" light expand="md">
        <Container>
          <NavbarBrand tag={Link} to="/"  className="text-warning">POKEDEX</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/pokemons" className="text-white">Pokemon</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/favorite" className="text-white">Favorite</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
  );
}

export default Menu;