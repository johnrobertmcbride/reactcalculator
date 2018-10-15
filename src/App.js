import React, { Component } from 'react';
import './App.css';
import Display from './components/Display';
import Square from './components/Square'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: "",
    }
  }

  handleclick(i) {
    let display = this.state.display;
    let secondLast = display.slice(-2, -1);
    let last = display.slice(-1);

    // if display is at 9 characters and entry is not = or C
    if(display.length === 9 && i !== "=" && i !== "C") {
      return
    }

    // if current entry is C, clear the display
    if(i === "C") {
      return (
        this.setState({
          display: ""
        })
      )
    }

    // if current entry is an operation
    if(i === "/" || i === "*" || i === "-" || i === "+") {
      // if this is the first entry and it was not -
      if(!last && i !== "-") {
        return
      }

      // if previous entry is -
      if(last === "-") {
        // if the - was the first entry
        if(!secondLast) {
          return
        }
        // if - represented an operation
        if(secondLast !== "/" && secondLast !== "*" && secondLast !== "-" && secondLast !== "+") {
          display = display.replace(/.$/,i)
          return (
            this.setState({
              display: display
            })
          )
        }
        // if - represented a negative number
        if(secondLast === "/" || secondLast === "*" || secondLast === "+") {
          // if current entry
          if(i === "-") {
            return
          } else {
            let endOf = display.length - 2
            display = display.slice(0, endOf)
            return (
              this.setState({
                display: display.concat(i)
              })
            )
          }
        }
      }

      // if previous entry is an /, * or +
      if(last === "/" || last === "*" || last === "+") {
        //if current entry is -
        if(i === "-") {
          return (
            this.setState({
              display: this.state.display.concat(i)
            })
          )
        }
        // replace previous operation with new operation
        display = display.replace(/.$/,i)
        return (
          this.setState({
            display: display
          })
        )
      }
    }

    // if entry is 0
    if(i === 0) {
      // if the 0 was the first entry
      if(!last) {
        return
      }
      // if previous entry was an operation
      if(last === "/" || last === "*" || last === "-" || last === "+") {
        return
      }
    }

    // if entry is =
    if(i === "=") {
      // if previous entry is an operation
      if(last === "/" || last === "*" || last === "-" || last === "+") {
        return
      }
      display =  (Math.round(eval(this.state.display)*100)/100).toString()
    } else {
      display = this.state.display.concat(i)
    }

    // covers all other outcomes
    this.setState({
      display: display
    })
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
