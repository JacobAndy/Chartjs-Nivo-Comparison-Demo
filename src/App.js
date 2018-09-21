import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>test</h1>
          {routes}
          <Link to="/chartjs">
            <button>ChartJs Example</button>
          </Link>
          <Link to="/nivo">
            <button>Nivo Example</button>
          </Link>
        </div>
      </Router>
    );
  }
}

export default App;
