import React from 'react';
import "./css/index.scss";
import { Navigation } from "./Container/Navigation"
import { Banner } from "./Container/Banner"
import { Motion } from "./Container/Motion"
import { Safety } from "./Container/Safety"
import { AboutUs } from "./Container/AboutUs"
import { SignUp } from "./Container/SignUp"
import { HelpCenter } from "./Container/HelpCenter"
import { Footer } from "./Container/Footer"

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Banner/>
      <Motion/>
      <Safety/>
      <AboutUs/>
      <SignUp/>
      <HelpCenter/>
      <Footer/>
    </div>
  );
}

export default App;
