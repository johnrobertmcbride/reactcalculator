import React, { Component } from 'react';
import './App.css';
import Display from './components/Display';
import Square from './components/Square';
import calculator from './utils/calculator';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: "",
    }
  }

  handleclick(i) {
    this.setState(calculator(this.state.display, i));
  }

  renderSquare(i) {
    return (
      <Square
        value={i}
        onClick={() => this.handleclick(i)}
      />
    );
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <Display
              display={this.state.display}
            />
          </div>
          <div className="row">
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            {this.renderSquare(9)}
            {this.renderSquare("/")}
          </div>
          <div className="row">
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}
            {this.renderSquare("*")}
          </div>
          <div className="row">
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
            {this.renderSquare("-")}
          </div>
          <div className="row">
            {this.renderSquare(0)}
            {this.renderSquare("C")}
            {this.renderSquare("=")}
            {this.renderSquare("+")}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
