import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import JSONfoods from "./foods.json";
import FoodBox from "./FoodBox";
import FoodForm from "./FoodForm";
import FoodSearch from "./FoodSearch";

class App extends Component {
  state = {
    foods: JSONfoods,
    search: ""
  };

  pushFood = food => {
    let foods = [...this.state.foods];
    foods.push(food);
    this.setState({ foods: foods });
  };

  foodFilter = value => {
    console.log(value);
    let filteredFoods = [...this.state.foods];
    filteredFoods = filteredFoods.filter(food => {
      return food.name.includes(value);
    });

    this.setState({ search: value });
    // this.setState({ foods: filteredFoods });
  };

  render() {
    console.log(this.state.foods);
    const elements = this.state.foods
      .filter(el => el.name.includes(this.state.search))
      .map((food, index) => {
        return <FoodBox key={index} data={food} />;
      });

    return (
      <div className="App">
        <FoodSearch foodFilter={this.foodFilter} />
        <FoodForm pushFood={this.pushFood} />
        {elements}
      </div>
    );
  }
}

export default App;
