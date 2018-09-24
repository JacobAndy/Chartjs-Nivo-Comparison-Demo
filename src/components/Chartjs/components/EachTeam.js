import React, { Component } from "react";
import "../style/EachTeam.css";
import { Context } from "../../../App";

import Utah from "../../../dependencies/UtahStateFootball.png";
import BYU from "../../../dependencies/BYUFootballLogo.png";

class EachTeam extends Component {
  state = {
    currentTeam: this.props.currentTeam,
    currentYear: 1950,
    currentStats: []
  };
  componentDidMount() {
    if (this.props.val.length) {
      const index = this.props.val[this.statecurrentTeam].findIndex(
        e => e.Year === this.state.currentYear
      );
      this.setState({
        currentStats: this.props.val[this.state.currentTeam][index]
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    let { currentYear, currentTeam, currentStats } = this.state;
    let { updateState } = this.props;
    if (
      prevState.currentYear !== currentYear ||
      prevState.currentTeam !== currentTeam ||
      prevProps.val !== this.props.val
    ) {
      const index = this.props.val[currentTeam].findIndex(
        e => +e.Year === currentYear && e.team.toLowerCase() === currentTeam
      );
      this.setState({ currentStats: this.props.val[currentTeam][index] });
      console.log("BLahahahahahaahahah", this.props.val[currentTeam][index]);
      updateState(
        this.props.currentTeam,
        this.getPossibility(
          +this.props.val[currentTeam][index].Wins,
          +this.props.val[currentTeam][index].Losses,
          +this.props.val[currentTeam][index].Tie
        )
      );
    }
  }
  changeCurrentTeam = (current, e) => {
    this.setState({ [current]: e });
  };
  getPossibility = (w, l, t) => {
    console.log("HERERERERERERRERERE", w, l, t);
    const total = w + l + t;
    const winTieCombo = w + t / 2;
    console.log(winTieCombo / total);
    return winTieCombo / total;
  };
  render() {
    let { changeCurrentTeam } = this;
    let { currentTeam, currentYear, currentStats } = this.state;

    console.log(this.state);

    return (
      <div className="each_team">
        <header>
          <select
            value={currentTeam}
            onChange={e => changeCurrentTeam("currentTeam", e.target.value)}
          >
            <option value="utah">Utah State</option>
            <option value="byu">BYU</option>
          </select>
          <select
            value={currentYear}
            onChange={e => changeCurrentTeam("currentYear", +e.target.value)}
          >
            <option value={1950}>1950</option>
            <option value={1951}>1951</option>
            <option value={1952}>1952</option>
            <option value={1953}>1953</option>
            <option value={1954}>1954</option>
          </select>
        </header>
        <div className="each_team__details">
          <img
            src={currentTeam === "utah" ? Utah : BYU}
            height="125px"
            alt={currentTeam === "utah" ? "Utah State" : "BYU"}
          />
          {/*
        ** Image is the logo of the selected team

        ** section includes the details of that seasons stats
        for the team
        */}
          <div>
            <h3>{currentStats.team}</h3>
            <h3>{currentStats.Coach}</h3>
            <h3>{currentStats.Conference}</h3>
            <h3>{currentStats.rank}</h3>
          </div>
          <section>
            <div>
              <h3>W</h3>
              <h3>{currentStats.Wins}</h3>
            </div>
            <div>
              <h3>L</h3>
              <h3>{currentStats.Losses}</h3>
            </div>
            <div>
              <h3>T</h3>
              <h3>{currentStats.Tie}</h3>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default EachTeam;
