import React, { Component } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import "./App.css";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: "",
      b: "",
      result: 0,
    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleClick = (event) => {
    const { a, b } = this.state;
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);
    const operation = event.target.name;
    switch (operation) {
      case "+":
        this.setState({ result: num1 + num2 });
        break;
      case "-":
        this.setState({ result: num1 - num2 });
        break;
      case "*":
        this.setState({ result: num1 * num2 });
        break;
      case "/":
        if (num2 !== 0) {
          this.setState({ result: num1 / num2 });
        } else {
          alert("You can't divide a number by zero");
        }
        break;
      default:
        break;
    }
  };
  render() {
    return (
      <div className="container">
        <Input
          type="number"
          name="a"
          value={this.state.a}
          onChange={this.handleChange}
          label="Enter First Number"
        />
        <Input
          type="number"
          name="b"
          value={this.state.b}
          onChange={this.handleChange}
          label="Enter Second Number"
        />
        <div className="buttonContainer">
          <Button type="button" name="+" onClick={this.handleClick}>
            Add
          </Button>
          <Button type="button" name="-" onClick={this.handleClick}>
            Subtract
          </Button>
          <Button type="button" name="*" onClick={this.handleClick}>
            Multiply
          </Button>
          <Button type="button" name="/" onClick={this.handleClick}>
            Divide
          </Button>
        </div>
        <p>{`A: ${this.state.a}`}</p>
        <p>{`B: ${this.state.b}`}</p>
        <p>{`Output: ${this.state.result}`}</p>
      </div>
    );
  }
}
