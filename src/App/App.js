import React, { Component } from "react";
import { AppHeader } from "components/app-header";
import { AppFooter } from "components/app-footer";
import { AppNavbar } from "components/app-navbar";
import { getPlants } from "services/api";
import "./App.scss";

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
      <div id="app" className="App theme--light">
        <AppHeader />
        <AppNavbar />
        <div className="site-content">
          <div className="test">Welcome to Hoya.</div>
        </div>
        <AppFooter />
      </div>
    );
  }
}

export default App;
