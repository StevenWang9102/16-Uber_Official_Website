import React from 'react';
import "./css/index.scss";
import { MainNav } from "./Components/MainNav"
import { Banner } from "./Components/MainBanner"

function App() {
  return (
    <div className="App">
      <MainNav/>
      <Banner/>
    </div>
  );
}

export default App;
