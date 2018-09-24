import React, { Component, Fragment } from "react";
import "../style/PercentDoughnut.css";
import { Doughnut } from "react-chartjs-2";
import { withRouter } from "react-router-dom";
import { ResponsivePie } from "@nivo/pie";

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
    console.log(this.props.match.params.id);
    return (
      <Fragment>
        {this.props.match.params.id === "nivo" ? (
          <div id="nivo">
            <div className=" nivo-graph nivo-graph_left">
              <ResponsivePie
                data={[
                  {
                    id: "byu",
                    label: "BYU",
                    value: this.props.diffBYU
                  },
                  {
                    id: "utah",
                    label: "Utah",
                    value: 100 - this.props.diffBYU
                  }
                ]}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                fit={false}
                colors="nivo"
                colorBy="id"
                borderWidth={1}
                borderColor="inherit:darker(0.2)"
                radialLabelsSkipAngle={10}
                radialLabelsTextXOffset={6}
                radialLabelsTextColor="#333333"
                radialLabelsLinkOffset={0}
                radialLabelsLinkDiagonalLength={16}
                radialLabelsLinkHorizontalLength={24}
                radialLabelsLinkStrokeWidth={1}
                radialLabelsLinkColor="inherit"
                slicesLabelsSkipAngle={10}
                slicesLabelsTextColor="#333333"
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                defs={[
                  {
                    id: "byus",
                    type: "patternDots",
                    background: "lightblue",
                    color: "rgba(255, 255, 255, 0.3)",
                    size: 4,
                    padding: 1,
                    stagger: true
                  },
                  {
                    id: "utahs",
                    type: "patternDots",
                    background: "white",
                    color: "rgba(255, 255, 255, 0.3)",
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                  }
                ]}
                fill={[
                  {
                    match: {
                      id: "byu"
                    },
                    id: "byus"
                  },
                  {
                    match: {
                      id: "utah"
                    },
                    id: "utahs"
                  }
                ]}
                legends={[
                  {
                    anchor: "bottom",
                    direction: "row",
                    translateY: 56,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: "#999",
                    symbolSize: 18,
                    symbolShape: "circle",
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemTextColor: "#000"
                        }
                      }
                    ]
                  }
                ]}
              />
            </div>
            <div>
              <img
                src={this.state.winner === "utah" ? Utah : BYU}
                // width="125px"
                height="125px"
              />
              <h3>WINS</h3>
            </div>
            <div className=" nivo-graph nivo-graph_right">
              <ResponsivePie
                data={[
                  {
                    id: "byu",
                    label: "BYU",
                    value: 100 - this.props.diffUtah,
                    color: "whitesmoke"
                  },
                  {
                    id: "utah",
                    label: "Utah",
                    value: this.props.diffUtah,
                    color: "#ff0000"
                  }
                ]}
                margin={
                  {
                    // top: 40,
                    // right: 80,
                    // bottom: 80,
                    // left: 80
                  }
                }
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                fit={false}
                colors="nivo"
                colorBy="id"
                borderWidth={1}
                borderColor="inherit:darker(0.2)"
                radialLabelsSkipAngle={10}
                radialLabelsTextXOffset={6}
                radialLabelsTextColor="#333333"
                radialLabelsLinkOffset={0}
                radialLabelsLinkDiagonalLength={16}
                radialLabelsLinkHorizontalLength={24}
                radialLabelsLinkStrokeWidth={1}
                radialLabelsLinkColor="inherit"
                slicesLabelsSkipAngle={10}
                slicesLabelsTextColor="#333333"
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                defs={[
                  {
                    id: "byu",
                    type: "patternDots",
                    background: "white",
                    color: "rgba(255, 255, 255, 0.3)",
                    size: 4,
                    padding: 1,
                    stagger: true
                  },
                  {
                    id: "utah",
                    type: "patternDots",
                    background: "#FF6666",
                    color: "rgba(255, 255, 255, 0.3)",
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                  }
                ]}
                fill={[
                  {
                    match: {
                      id: "byu"
                    },
                    id: "byu"
                  },
                  {
                    match: {
                      id: "utah"
                    },
                    id: "utah"
                  }
                ]}
                legends={[
                  {
                    anchor: "bottom",
                    direction: "row",
                    translateY: 56,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: "#999",
                    symbolSize: 18,
                    symbolShape: "circle",
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemTextColor: "#000"
                        }
                      }
                    ]
                  }
                ]}
              />
            </div>
          </div>
        ) : (
          <div className="doughnut-percents">
            <div className="doughnut-percents__test_left">
              <Doughnut
                data={{
                  labels: ["BYU", "Utah"],
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
                // width="125px"
                height="125px"
              />
              <h3>WINS</h3>
            </div>
            <div className="doughnut-percents__test_right">
              <Doughnut
                data={{
                  labels: ["BYU", "Utah"],
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
        )}
      </Fragment>
    );
  }
}
export default withRouter(PercentDoughnut);
