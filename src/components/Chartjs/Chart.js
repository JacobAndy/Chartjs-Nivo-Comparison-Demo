import React, { Component } from "react";
import PercentDoughnut from "./components/PercentDoughnut";
import "./style/Chart.css";
import { Context } from "../../App";

import EachTeam from "./components/EachTeam";

class ChartJS extends Component {
  state = {};

  render() {
    console.log(this.props);
    return (
      <div className="chart">
        <main className="chart__team-holder">
          <EachTeam currentTeam="byu" />
          <h2>VS</h2>
          <EachTeam currentTeam="utah" />
        </main>
        {/* <PercentDoughnut /> */}
      </div>
    );
  }
}
let NewChart = () => (
  <Context.Consumer>{val => <ChartJS val={val} />}</Context.Consumer>
);
export default NewChart;
