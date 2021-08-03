import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"
const TopNav = ({searching, search}) => {
    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      
      
      
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
        value={search}
        onChange={(e) => searching(e.currentTarget.value)}
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    )
}
export default TopNav