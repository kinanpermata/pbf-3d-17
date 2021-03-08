import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: ['semangka', 'mangga'] };
  }

  handleChange = (e) => {
    var options = e.target.options;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({ value: value });
    <select multiple={true} value={this.state.value} onChange={this.handleChange}></select>
  }

  handleSubmit = (event) => {
    alert('Halo, ' + this.state.value + ' !');
    event.preventDefault();
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Biodata:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);