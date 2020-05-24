import React from 'react';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';
import './App.css';
import HamHelper from './HamHelper';

const Drawer = styled.div`
  position: absolute;
  height: 90%;
  background: black;
  width: 40vh;
  left: ${props => props.left}vh;
`;

const Link = styled.div`
  cursor: pointer;
  padding: 1em 1em 1em 3em;
  color: white;
  font-weight: bold;
`;

class Hamburger extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        toggleState: 0
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.refs.container.classList.toggle('change');
      this.setState({
        toggleState: this.state.toggleState ? 0 : 1
      });
    }
  }

  export default Hamburger
  