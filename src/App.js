import React from "react";
import "./App.css";
import Header from "./components/Header";
import Apod from "./components/Apod";


function App() {
  return (
    <div className="App">
      <Header />
      <Apod />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun!
      </p>
    </div>
  );
}

export default App;
