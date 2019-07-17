import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import JSONfoods from "./foods.json";
import FoodBox from "./FoodBox";
import FoodForm from "./FoodForm";
import FoodSearch from "./FoodSearch";

class App extends Component {
  state = {
    foods: JSONfoods
  };

  pushFood = food => {
    let foods = [...this.state.foods];
    foods.push(food);
    this.setState({ foods: foods });
  };

  render() {
    console.log(this.state.foods);
    const elements = this.state.foods.map((food, index) => {
      return <FoodBox key={index} data={food} />;
    });

    return (
      <div className="App">
        <FoodSearch />
        <FoodForm pushFood={this.pushFood} />
        {elements}
      </div>
    );
  }
}

export default App;
