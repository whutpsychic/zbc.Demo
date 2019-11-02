import React from "react";
import "./App.scss";
import {
  Topbar,
  TopCarousel,
  Services,
  Videos,
  Study,
  Aftersale,
  BottomAbout,
  BottomLinker
} from "./components";

function App() {
  return (
    <div className="App">
      <Topbar />
      <TopCarousel />
      <Services />
      <Videos />
      <Study />
      <Aftersale />
      <BottomAbout />
      <BottomLinker />
    </div>
  );
}

export default App;
