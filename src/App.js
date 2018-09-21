import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Jacob's Demo</h1>
          <p>
            This demo is to show the difference of 2 data visualization tools,
            but complete the same task
          </p>
          {routes}
          <Link to="/chartjs">
            <button>ChartJs</button>
          </Link>
          <Link to="/nivo">
            <button>Nivo</button>
          </Link>
        </div>
      </Router>
    );
  }
}

export default App;
