import {
  NavHeader,
  Container,
  NavWrapper,
  Alink,
  AlinkLogo,
  NavUL,
  Form,
  Input,
  Dropdown,
  AlinkImgDD,
  ImgDD,
  ULDD,
  AlinkDD,
  HR,
} from "./navStyle";

function Navbar() {
  return (
    <NavHeader>
      <Container>
        <NavWrapper>
          <AlinkLogo to="/">
            <i className="bi bi-alarm fs-3"></i>
          </AlinkLogo>
          <NavUL>
            <li>
              <Alink to="#">Overview</Alink>
            </li>
            <li>
              <Alink to="#">Inventory</Alink>
            </li>
            <li>
              <Alink to="#">Customers</Alink>
            </li>
            <li>
              <Alink to="#">Products</Alink>
            </li>
          </NavUL>

          <Form>
            <Input />
          </Form>

          <Dropdown>
            <AlinkImgDD to="#">
              <ImgDD />
            </AlinkImgDD>

            <ULDD>
              <li>
                <AlinkDD to="#">New project...</AlinkDD>
              </li>
              <li>
                <AlinkDD to="#">Settings</AlinkDD>
              </li>
              <li>
                <AlinkDD to="#">Profile</AlinkDD>
              </li>
              <li>
                <HR />
              </li>
              <li>
                <AlinkDD to="#">Sign out</AlinkDD>
              </li>
            </ULDD>
          </Dropdown>
        </NavWrapper>
      </Container>
    </NavHeader>
  );
}

export default Navbar;
