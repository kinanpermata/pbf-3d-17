import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'

// Cara 1: membuat toggle button
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // binding ini dibutuhkan agar dapat bekerja ketika pemanggilan
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render () {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON - 1841720022' : 'OFF - Kinanti Permata Putri'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);