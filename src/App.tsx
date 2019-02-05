import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { NavigationBar } from "./Components/Navbar";
import { Slider } from "./Components/Carousel";
import { InfoBar } from "./Components/InfoBar";
import { BottomNavBar } from "./Components/BottomNav";
import { NoticeBoard } from "./Components/NoticeBoard";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <NoticeBoard />
        <Slider />
        <InfoBar />
        <BottomNavBar />
      </React.Fragment>
    );
  }
}

export default App;
