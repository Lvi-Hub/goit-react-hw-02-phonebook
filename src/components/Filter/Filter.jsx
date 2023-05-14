import React, { Component } from 'react';

export class Filter extends Component {
  render() {
    return (
      <label className="labelFilter">
        Find contact by name
        <input
          type="text"
          value={this.props.filterChange}
          onChange={this.props.onInputFilter}
        />
      </label>
    );
  }
}
