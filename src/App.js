import React from 'react';
import "./css/index.scss";
import { MainNav } from "./Container/MainNav"
import { Banner } from "./Container/MainBanner"
import { Motion } from "./Container/Motion"
import { Safety } from "./Container/Safety"
import { AboutUs } from "./Container/AboutUs"

function App() {
  return (
    <div className="App">
      <MainNav/>
      <Banner/>
      <Motion/>
      <Safety/>
      <AboutUs/>
    </div>
  );
}

export default App;
