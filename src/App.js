import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Carousel, Hero, ZManga } from "./Pages";
import "./App.scss";
import { Navigation } from "./Components";

function App() {
  return (
    <Router>
       {/* Fixed Header */}
       <Navigation />
      <Switch>
        <Route exact path='/' component={Hero} />
        <Route exact path='/zmanga' component={ZManga} />
        <Route exact path='/categories'  component={Carousel} />
        <Route path='*'>
          <h1>page not found</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
