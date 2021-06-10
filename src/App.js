import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  Gallery from "./components/pages/Gallery";
import Home from "./components/pages/Home"


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/gallery" exact component={() => <Gallery />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;