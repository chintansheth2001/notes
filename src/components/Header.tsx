import * as React from 'react';
import { Container, Navbar } from 'react-bootstrap';


// export interface IHeaderProps {
// }

export default function Header() {
  return (
    <div>
      <Navbar bg="dark" fixed="top" variant="dark">
        <Container>
          <Navbar.Brand>
            Simple Notes
          </Navbar.Brand>
        </Container>

      </Navbar>
    </div>
  );
}
