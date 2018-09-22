import React, { Component } from "react";
import PercentDoughnut from "./components/PercentDoughnut";
import "./style/Chart.css";

import EachTeam from "./components/EachTeam";

class ChartJS extends Component {
  state = {};

  render() {
    return (
      <div className="chart">
        <main className="chart__team-holder">
          <EachTeam currentTeam="byu" />
          <h2>VS</h2>
          <EachTeam currentTeam="utah" />
        </main>
        <PercentDoughnut />
      </div>
    );
  }
}
export default ChartJS;
