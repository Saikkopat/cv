import React from "react";
import MyNavbar from "./MyNavbar";
import Title from "./Title";
import "bootstrap/dist/css/bootstrap.min.css";
document.body.style.backgroundColor = "#303841";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyNavbar />
        <Title />
      </header>
    </div>
  );
}

export default App;
