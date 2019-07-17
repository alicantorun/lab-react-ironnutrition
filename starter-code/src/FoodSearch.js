import React, { Component } from "react";

export default class FoodSearch extends Component {
  state = {
    value: ""
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState({
      value: value
    });

    this.props.foodFilter(value);
  };

  render() {
    return (
      <form>
        <label htmlFor="name" />
        <input
          onChange={this.handleChange}
          type="text"
          name="name"
          id="name"
          placeholder="Search for fod..."
          value={this.state.value}
        />
      </form>
    );
  }
}
