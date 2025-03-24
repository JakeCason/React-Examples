import React, { Component } from 'react';

class Dropdown extends Component {
    handleChange = (val) => {
        if (this.props.onChange) {
          this.props.onChange(val);
        }
      };

    componentDidMount() {
        this.onStart();
    }

    onStart() {
        for (let i = 0; i < this.props.options.length; i++) {
            console.log(`${this.props.options[i].label} - ${this.props.options[i].value}`);
        }
    }

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