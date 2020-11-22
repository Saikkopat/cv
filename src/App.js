import React from "react";
import MyNavbar from "./MyNavbar";
import Title from "./Title";
import AboutMe from "./AboutMe";
import "bootstrap/dist/css/bootstrap.min.css";
document.body.style.backgroundColor = "#303841";
function App() {
  return (
    <div>
      <MyNavbar />
      <Title />
      <AboutMe />
    </div>
  );
}

export default App;
