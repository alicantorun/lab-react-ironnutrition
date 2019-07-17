import React, { Component } from "react";

export default class FoodForm extends Component {
  state = {
    name: "",
    calories: 0,
    image: ""
  };

  handleSubmit = event => {
    event.preventDefault();

    const newFood = {
      name: this.state.name,
      calories: Number(this.state.calories),
      image: this.state.image
    };

    this.props.pushFood(newFood);

    this.setState({
      name: "",
      calories: 0,
      image: ""
    });
  };

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          onChange={this.handleChange}
          type="text"
          name="name"
          id="name"
          value={this.state.name}
        />

        <label htmlFor="calories">Calories: </label>
        <input
          onChange={this.handleChange}
          type="number"
          name="calories"
          id="calories"
          value={this.state.calories}
        />

        <label htmlFor="image">Picture URL: </label>
        <input
          onChange={this.handleChange}
          type="text"
          name="image"
          id="image"
          value={this.state.image}
        />

        <button type="submit">Add Food</button>
      </form>
    );
  }
}
