import React, { Component } from "react";
// import logo from './spacex-vector-logo.svg';
import "./App.scss";
import CountDownContainer from "./components/countDown-container/countDown-container.component";

class App extends Component {
  constructor() {
    super();
    let datenow = Date();
    this.state = {
      nextLaunchDate: "",
      currentTime: datenow
    };
  }

  componentDidMount() {
    fetch("https://api.spacexdata.com/v3/launches/next")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({
          nextLaunchDate: data.launch_date_utc
        });
      });
  }

  render() {
    return (
      <CountDownContainer
        launchDate={new Date(this.state.nextLaunchDate)}
        text={"the next rocket will depart on:"}
      >
        <h1>
          the current time is {new Date(this.state.currentTime).toUTCString()}
        </h1>
      </CountDownContainer>
    );
  }
}

export default App;
