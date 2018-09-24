import React, { Component } from "react";
import PercentDoughnut from "./components/PercentDoughnut";
import "./style/Chart.css";
import { Context } from "../../App";

import EachTeam from "./components/EachTeam";

class ChartJS extends Component {
  state = {
    byu: 0,
    utah: 0,
    diffBYU: 0,
    diffUtah: 0
  };
  updateState = (type, val) => {
    let { utah, byu } = this.state;
    if (type === "byu") {
      let utahDiff = this.findDifference(val, utah);
      this.setState({
        [type]: val,
        diffUtah: utahDiff.utah,
        diffBYU: utahDiff.byu
      });
    } else if (type === "utah") {
      let utahDiff = this.findDifference(byu, val);
      this.setState({
        [type]: val,
        diffUtah: utahDiff.utah,
        diffBYU: utahDiff.byu
      });
    }
  };
  findDifference = (byu, utah) => {
    console.log(byu, utah);
    const difference = byu > utah ? byu - utah : utah - byu;

    return {
      byu: byu > utah ? 50 + difference * 2 : 50 - difference * 2,
      utah: utah > byu ? 50 + difference * 2 : 50 - difference * 2
    };
  };
  render() {
    console.log(this.state);
    let { winner, diffBYU, diffUtah } = this.state;
    return (
      <div className="chart">
        <main className="chart__team-holder">
          <EachTeam
            currentTeam="byu"
            val={this.props.val}
            updateState={this.updateState}
          />
          <h2>VS</h2>
          <EachTeam
            currentTeam="utah"
            val={this.props.val}
            updateState={this.updateState}
          />
        </main>
        <PercentDoughnut {...this.state} />
      </div>
    );
  }
}
let NewChart = () => (
  <Context.Consumer>{val => <ChartJS val={val} />}</Context.Consumer>
);
export default NewChart;
