import React from "react";
import "./App.css";
import Header from "./components/Header";
import Apod from "./components/Apod";

const divStyle = {
  backgroundColor: "black"
};

function App() {
  return (
    <div className="App" style={divStyle}>
      <Header />
      <Apod />
    </div>
  );
}

export default App;
