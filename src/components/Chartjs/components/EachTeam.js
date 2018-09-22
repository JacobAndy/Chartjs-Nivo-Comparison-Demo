import React, { Component } from "react";
import "../style/EachTeam.css";

import Utah from "../../../dependencies/UtahStateFootball.png";
import BYU from "../../../dependencies/BYUFootballLogo.png";

class EachTeam extends Component {
  state = {
    currentTeam: this.props.currentTeam,
    currentYear: 1951
  };
  changeCurrentTeam = (current, e) => {
    this.setState({ [current]: e });
  };
  render() {
    let { changeCurrentTeam } = this;
    let { currentTeam, currentYear } = this.state;

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
          <section>
            <div>
              <h3>W</h3>
              <h3>1</h3>
            </div>
            <div>
              <h3>L</h3>
              <h3>1</h3>
            </div>
            <div>
              <h3>T</h3>
              <h3>1</h3>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default EachTeam;
