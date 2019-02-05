import * as React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
export class NavigationBar extends React.Component {
  onLoginClick = () => {
    console.log("Login Clicked");
  };
  render() {
    return (
      <Navbar className="bg-light justify-content-between">
        <Navbar.Brand>Brand Name or Image</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse />
        <Nav className="mr-auto">
          <Nav.Link href="#home">
            <Button onClick={this.onLoginClick}>Login</Button>
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}
