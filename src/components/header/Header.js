import * as React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {Component} from "react";
import { LinkContainer } from 'react-router-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" variant="light">
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to={'/'} exact>
              <Nav.Link eventKey={'/'}>Главная</Nav.Link>
            </LinkContainer>
            <LinkContainer to={'/history'} exact>
              <Nav.Link eventKey={'/history'}>История</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
