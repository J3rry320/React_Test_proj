import React, { PureComponent } from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
export class BottomNavBar extends PureComponent {
  state = {
    sponsors: [
      "https://via.placeholder.com/75",
      "https://via.placeholder.com/75",
      "https://via.placeholder.com/75",
      "https://via.placeholder.com/75",
      "https://via.placeholder.com/75",
      "https://via.placeholder.com/75",
      "https://via.placeholder.com/75",
      "https://via.placeholder.com/75"
    ]
  };
  getImages = (from: number, to: number) => {
    const elem = this.state.sponsors.slice(from, to);
    return elem.map((ele, ind) => {
      return <img src={ele} key={ind} />;
    });
  };
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h5>Lorem</h5>
            {this.getImages(0, 4)}
          </Col>
          <Col>
            <h5>Ipsum</h5>
            {this.getImages(4, this.state.sponsors.length)}
          </Col>
        </Row>
        <Row>
          <Col>
            <Navbar>
              <Nav />
            </Navbar>
          </Col>
        </Row>
      </Container>
    );
  }
}
