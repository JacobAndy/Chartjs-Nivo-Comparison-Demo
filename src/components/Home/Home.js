import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Jacob's Demo</h1>
        <p>
          This demo is to show the difference of 2 data visualization tools, but
          complete the same task
        </p>
        <Link to="/chartjs">
          <button>ChartJs</button>
        </Link>
        <Link to="/nivo">
          <button>Nivo</button>
        </Link>
      </div>
    );
  }
}
export default Home;
