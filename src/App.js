import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import routes from "./routes";
import collegeStats from "./dependencies/CollegeFootballCompetitiveCSV.csv";
import axios from "axios";

export const Context = React.createContext("test");

class App extends Component {
  state = {
    value: { byu: [], utah: [] }
  };
  componentDidMount() {
    axios
      .get(collegeStats)
      .then(res => {
        const res2 = res.data.split("\r").slice(1);
        const newRes = res2.map(e => {
          const e2 = e.split(",");
          e2[0] = e2[0].slice(1);
          return {
            team: e2[0],
            rank: e2[1],
            Year: e2[2],
            Conference: e2[3],
            Wins: e2[4],
            Losses: e2[5],
            Tie: e2[6],
            Percentage: e2[7]
          };
        });
        const utah = newRes.filter(e => e.team === "Utah");
        const byu = newRes.filter(e => e.team === "BYU");
        this.setState({ value: { utah, byu } });
      })
      .catch(err => console.log("error", err));
  }
  render() {
    return (
      <Router>
        <Context.Provider value={this.state.value}>{routes}</Context.Provider>
      </Router>
    );
  }
}

export default App;
