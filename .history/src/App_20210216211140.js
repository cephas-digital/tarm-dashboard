import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () = {
  return(
  <Router>
    <Switch>
      <Route path="/">

      <Layout />
    </Route>

  </Switch>
    </Router >
  );
}

export default App;
