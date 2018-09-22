import React, { Component, Fragment } from "react";
import { Doughnut } from "react-chartjs-2";
import Utah from "../../../dependencies/UtahStateFootball.png";
import BYU from "../../../dependencies/BYUFootballLogo.png";

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "TEST",
      data: [10, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)"
      ],
      borderColor: [
        "rgba(255,99,132,1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)"
      ],
      borderWidth: 4
    }
  ]
};

class PercentDoughnut extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <Doughnut data={data} width={70} height={20} />
        <div>
          <img src={Utah} width="125px" height="125px" />
          <h3>WINS</h3>
        </div>
        <Doughnut data={data} width={70} height={20} />
      </Fragment>
    );
  }
}
export default PercentDoughnut;