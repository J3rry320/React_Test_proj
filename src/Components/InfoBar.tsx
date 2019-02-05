import React, { PureComponent } from "react";
import { ListGroup, Container } from "react-bootstrap";
export class InfoBar extends PureComponent {
  render() {
    return (
      <Container>
        <ListGroup>
          <ListGroup.Item>
            <h4 className="text-black-50 text-center">
              Non labore nisi ad esse excepteur excepteur cupidatat.
            </h4>
          </ListGroup.Item>
          <ListGroup.Item>
            <p className="text-left">
              Irure sit veniam nulla dolore occaecat ipsum sit culpa cillum
              consequat commodo et irure.
            </p>
          </ListGroup.Item>

          <ListGroup.Item>
            <p className="text-left">
              Irure sit veniam nulla dolore occaecat ipsum sit culpa cillum
              consequat commodo et irure.
            </p>
          </ListGroup.Item>

          <ListGroup.Item>
            <p className="text-left">
              Irure sit veniam nulla dolore occaecat ipsum sit culpa cillum
              consequat commodo et irure.
            </p>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    );
  }
}
