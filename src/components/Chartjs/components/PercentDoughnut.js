import React, { Component, Fragment } from "react";
import "../style/PercentDoughnut.css";
import { Doughnut } from "react-chartjs-2";

import Utah from "../../../dependencies/UtahStateFootball.png";
import BYU from "../../../dependencies/BYUFootballLogo.png";

class PercentDoughnut extends Component {
  state = {
    winner: this.props.diffBYU > this.props.diffUtah ? "byu" : "utah"
  };
  componentDidUpdate(prevProps) {
    if (
      prevProps.diffBYU !== this.props.diffBYU ||
      prevProps.diffUtah !== this.props.diffUtah
    ) {
      this.setState({
        winner: this.props.diffBYU > this.props.diffUtah ? "byu" : "utah"
      });
    }
  }
  render() {
    console.log(this.state, this.props);
    return (
      <div className="doughnut-percents">
        <div className="doughnut-percents__test_left">
          <Doughnut
            data={{
              // labels: ["Left", "Right"],
              datasets: [
                {
                  label: "TEST",
                  data: [this.props.diffBYU, 100 - this.props.diffBYU], //2 percents
                  backgroundColor: ["blue", "whitesmoke"], //coexisting colors
                  borderColor: ["blue", "whitesmoke"],
                  borderWidth: 2
                }
              ]
            }}
          />
        </div>

        <div>
          <img
            src={this.state.winner === "utah" ? Utah : BYU}
            width="125px"
            height="125px"
          />
          <h3>WINS</h3>
        </div>
        <div className="doughnut-percents__test_right">
          <Doughnut
            data={{
              // labels: ["Left", "Right"],
              datasets: [
                {
                  label: "TEST",
                  data: [100 - this.props.diffUtah, this.props.diffUtah], //2 percents
                  backgroundColor: ["whitesmoke", "red"], //coexisting colors
                  borderColor: ["whitesmoke", "red"],
                  borderWidth: 2
                }
              ]
            }}
          />
        </div>
      </div>
    );
  }
}
export default PercentDoughnut;
