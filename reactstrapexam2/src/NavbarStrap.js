import { useState } from "react";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  UncontrolledDropdown,
} from "reactstrap";

function NavbarStrap() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div style={{ width: "800px" }}>
      {/* expand = md 를 지우면 App용으로 토글메뉴가 햄버거로 바뀐다 */}
      <Navbar color="light" light expand="md">
        <NavbarBrand className="mr-auto" href="http://edu.kosta.or.kr">
          kosta
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={open} navbar>
          <Nav navbar className="ml-auto">
            <NavItem>
              <NavLink href="http://naver.com">네이버</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="http://google.com">구글</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem>Option 3</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarStrap;
