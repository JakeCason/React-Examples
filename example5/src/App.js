import React, { Component } from 'react';
import Button from './components/button';
import Dropdown from './components/dropdown';

class App extends Component {
  state = {
    selectedValue: ''
  };

  handleSelectChange = (e) => {
    this.setState({ selectedValue: e.target.value });
  };

  handleClick = () => {
    alert(`Selected: ${this.state.selectedValue}`);
  };

  render() {
    const options = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ];

    return (
      <div>
        <Button
          text="Show Selected"
          onClick={this.handleClick}
        />
        <Dropdown
          options={options}
          onChange={this.handleSelectChange}
        />
      </div>
    );
  }
}

export default App;