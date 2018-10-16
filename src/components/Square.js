import React, { Component } from 'react';
import styled from 'styled-components';

const StyledSquare = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 1px solid black;
  background-color: lightgray;
`

class Square extends Component {
  render() {
    return (
      <StyledSquare onClick={() => this.props.onClick()}>
        {this.props.value}
      </StyledSquare>
    )
  }
}

export default Square