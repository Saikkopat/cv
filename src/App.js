import React from "react";
import MyNavbar from "./MyNavbar";
import Title from "./Title";
import AboutMe from "./AboutMe";
import Education from "./Education";
import BreakLine from "./BreakLine";
import PreviousWorks from "./PreviousWorks";
import Proyects from './Proyects';
import "bootstrap/dist/css/bootstrap.min.css";
document.body.style.backgroundColor = "#303841";
function App() {
  return (
    <div>
      <MyNavbar />
      <Title />
      <BreakLine />
      <AboutMe />
      <BreakLine />
      <Education />
      <BreakLine />
      <PreviousWorks />
      <BreakLine />
      <Proyects />
      <BreakLine />
    </div>
  );
}

export default App;
