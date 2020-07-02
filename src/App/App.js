import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppHeader } from "App/components/app-header";
import { AppFooter } from "App/components/app-footer";
import { AppNavbar } from "App/components/app-navbar";
import { getPlants } from "services/api";
import "./App.scss";
import Home from "Home/Home.js";
import About from "About/About.js";

class App extends Component {
  loadPlants = async () => {
    try {
      const response = await getPlants();
      const results = response["data"];
      console.log(results);
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount() {
    this.loadPlants();
  }

  render() {
    return (
      <Router>
        <div id="app" className="App theme--light">
          <AppHeader />
          <AppNavbar />
          <div className="site-content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
          <AppFooter />
        </div>
      </Router>
    );
  }
}

export default App;
