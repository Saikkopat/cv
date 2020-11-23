import React, { Component } from "react";
import "./css/Title.css";
class Title extends Component {
  render() {
    return (
          <div id="home">
              <h1 className="centralTitle title">Angel Cardenas</h1>
              <div style={{backgroundColor: "#3a4750"}}>
              <h2 className="subTitle title">A (in a strange way) programmer.</h2>
              </div>
          </div>
    );
  }
}

export default Title;
