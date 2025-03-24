import React, { Component } from 'react';

class Dropdown extends Component {
  handleChange = (e) => {
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  render() {
    return (
      <div>
        <select onChange={this.handleChange}>
          {this.props.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Dropdown;