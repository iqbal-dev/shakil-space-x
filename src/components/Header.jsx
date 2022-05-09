import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

function Header({ data, setAllData }) {
  const handleClick = () => {
    function getLastWeeksDate() {
      const now = new Date();

      return new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    }
    console.log("====================================");
    console.log(
      data.filter(
        (items) =>
          new Date(items.launch_date_local) < new Date() &&
          new Date(items.launch_date_local) > getLastWeeksDate()
      )
    );
    console.log("====================================");
  };

  const lastYear = () => {
    const currentYear = new Date().getFullYear();

    const previousYear = currentYear - 1;

    setAllData(
      data.filter(
        (items) =>
          new Date(items.launch_date_local).getFullYear() === previousYear
      )
    );
  };
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Space X</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <NavDropdown title="Launch Date" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3" onClick={handleClick}>
                  Last Week
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">Last Month</NavDropdown.Item>
                <NavDropdown.Item href="#action4" onClick={lastYear}>
                  Last year
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action2">Launch Status</Nav.Link>
              <Nav.Link href="#" disabled>
                Upcoming
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search by Rocket Name"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
