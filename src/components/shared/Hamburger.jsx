import React from 'react';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';
import '../../styles/Hamburger.scss';

const linkStyle2 = {
  color: 'white',
  fontSize: 'calc(7px + 1vmin)',
  fontFamily: 'Bungee',
}

const Drawer = styled.div`
  position: absolute;
  height: 90%;
  background: black;
  width: 28vw;
  left: ${props => props.left}vh;
`;

const Link = styled.div`
  cursor: pointer;
  padding: 1em 1em 1em 3em;
  color: white;
  font-weight: bold;
  background-color: black;
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
 

  render() {
    return (
      <div id="parent">
        <div id="nav-bar">
          <div className="container" ref="container" onClick={this.handleClick}>
            <div className="bar1"/>
            <div className="bar2"/>
            <div className="bar3"/>
          </div>
        </div>
            
        <Motion
          defaultStyle={{ left: -40 }}
          style={{
              left: spring(this.state.toggleState ? 0 : -40, {
              stiffness: 210,
              damping: 10
            })
          }}
        >
          {style => (
            <div className='drawer'>
            <Drawer left={style.left}>
              <Link to="/art" style={linkStyle2}>Art Now</Link>
              <Link to="/fashion" style={linkStyle2}>Fashion</Link>
              <Link to="/film" style={linkStyle2}>Film</Link>
              <Link to="/people" style={linkStyle2}>Humans</Link>
              <Link to="/people" style={linkStyle2}>Studios</Link>
              <Link to="/sound" style={linkStyle2}>Sound</Link>
              <Link to="/art" style={linkStyle2}>Adventures</Link>
              <Link to="/fashion" style={linkStyle2}>Rad Places</Link>
              <Link to="/film" style={linkStyle2}>Store</Link>
            </Drawer>
            </div>
          )}
        </Motion>
      </div>
    );
  }
}
export default Hamburger;
  