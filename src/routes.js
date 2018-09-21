import React from "react";
import { Switch, Route } from "react-router-dom";

export default (
  <Switch>
    <Route path="/chartjs" component={() => <h1>CHART JS</h1>} />
    <Route path="/nivo" component={() => <h1>NIVO</h1>} />
    <Route path="/" component={() => <h1>Home</h1>} />
  </Switch>
);
