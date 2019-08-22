//Inspired by https://github.com/drminnaar/react-clicker
import React from "react";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import "./bootstrap.min.css";

class Counter extends React.Component {
  //Constructor to store the counter value and events
  constructor(props) {
    super();
    this.state = {
      value: props.value || 0
    };
    this.addValue = this.addValue.bind(this);
    this.minusValue = this.minusValue.bind(this);
  }

  //add value to the counter
  addValue = () => {
    this.setState(i => ({ value: i.value + 1 }));
  };
  //minus value to the counter
  minusValue = () => {
    this.setState(i => ({ value: i.value - 1 }));
  };
  //reset value to the counter
  resetValue = () => {
    this.setState({ value: 0 });
  };


  // render counter elements
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
