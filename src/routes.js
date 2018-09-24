import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import ChartJS from "./components/Chartjs/Chart";
import Nivo from "./components/Nivo/Nivo";

export default (
  <Switch>
    <Route exact path="/chartjs/:id" component={ChartJS} />
    <Route exact path="/chartjs" component={ChartJS} />

    <Route path="/nivo" component={Nivo} />
    <Route path="/" component={Home} />
  </Switch>
);
