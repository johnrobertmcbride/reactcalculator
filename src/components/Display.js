import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDisplay = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 400px;
  height: 150px;
  border: 1px solid black;
  font-size: 75px;
  color: white;
  background-color: black;
`

class Display extends Component {
  render() {
    return (
      <StyledDisplay>
        {this.props.display}
      </StyledDisplay>
    )
  }
}

export default Display;