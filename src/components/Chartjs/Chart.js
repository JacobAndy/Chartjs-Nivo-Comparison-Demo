import React, { Component } from "react";
import PercentDoughnut from "./components/PercentDoughnut";
import "./style/Chart.css";

import EachTeam from "./components/EachTeam";

class ChartJS extends Component {
  state = {};

  render() {
    return (
      <div>
        <main>
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
