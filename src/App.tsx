import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { NavigationBar } from "./Components/Navbar";
import { Slider } from "./Components/Carousel";
import { InfoBar } from "./Components/InfoBar";
import { BottomNavBar } from "./Components/BottomNav";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Slider />
        <InfoBar />
        <BottomNavBar />
      </React.Fragment>
    );
  }
}

export default App;
