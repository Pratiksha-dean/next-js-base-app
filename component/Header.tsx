import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import { logout } from "./Constant";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const logoutUser = () => {
    logout();
    router.push("/login");
  };

  const CustomToggle = React.forwardRef(
    ({ children, onClick }: any, ref: any) => (
      <a
        className="user-name"
        href="javascript:void(0)"
        ref={ref}
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
      >
        {children}
      </a>
    )
  );
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="dark"
      variant="dark"
      className="px-3 header"
    >
      <Navbar.Brand href="#home">Brand name</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          {/* <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item> */}
          {/* </NavDropdown> */}
        </Nav>

        <Nav>
          <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
              <div className="d-flex">
                <div>Pratiksha Mhatre</div>
                <div className="avatar">
                  <div className="avatar-text center">PM</div>
                </div>
                <div className="mx-2">&#x25bc;</div>{" "}
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                href="/edit-profile"
                // onClick={() => router.push("edit-profile")}
              >
                Edit Profile
              </Dropdown.Item>
              <Dropdown.Item
                href="change-password"
                // onClick={() => router.push("change-password")}
              >
                Change Password
              </Dropdown.Item>
              <Dropdown.Item href="" onClick={() => logoutUser()}>
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
