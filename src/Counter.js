import React from "react";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import "./bootstrap.min.css";

class Counter extends React.Component {
  constructor(props) {
    super();
    this.state = {
      value: props.value || 0
    };
    this.addValue = this.addValue.bind(this);
    this.minusValue = this.minusValue.bind(this);
  }

  addValue = () => {
    this.setState(i => ({ value: i.value + 1 }));
  };
  minusValue = () => {
    this.setState(i => ({ value: i.value - 1 }));
  };
  resetValue = () => {
    this.setState({ value: 0 });
  };

  render() {
    return (
      <Container className="pt-5">
        <Row>
          <div className="counter mx-auto">
            <Card>
              <Card.Body>
                <h1 className="lead text-center">React Counter</h1>
                <div className="text-center pt-2" style={{ height: "5rem" }}>
                  <h1>{this.state.value}</h1>
                </div>
                <ButtonToolbar>
                  <ButtonGroup>
                    <Button variant="success" onClick={this.addValue}>
                      +
                    </Button>
                    <Button variant="warning" onClick={this.resetValue}>
                      Reset
                    </Button>
                    <Button variant="danger" onClick={this.minusValue}>
                      -
                    </Button>
                  </ButtonGroup>
                </ButtonToolbar>
              </Card.Body>
            </Card>
          </div>
        </Row>
      </Container>
    );
  }
}

export default Counter;
