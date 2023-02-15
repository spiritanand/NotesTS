import React from "react";
import {
  Button,
  Col,
  Container,
  Navbar,
  Stack
} from "react-bootstrap";
import {Link} from "react-router-dom";

const NavbarComponent = () => {
  return (
	<Navbar bg = "dark"
			variant = "dark"
	>
	  <Container>
		<Navbar.Brand>
		  <Link to = "/">
			<h1>
			  NoTeS
			</h1>
		  </Link>
		</Navbar.Brand>
		<Col xs = "auto">
		  <Stack gap = {2}
				 direction = "horizontal"
		  >
			<Link to = "/new-note">
			  <Button variant = "primary">
				New Note
			  </Button>
			</Link>
			<Button variant = "outline-secondary">
			  Edit Tags
			</Button>
		  </Stack>
		</Col>
	  </Container>
	</Navbar>
  );
};

export default NavbarComponent;
