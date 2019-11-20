import React, {Component} from 'react';
// import logo from './spacex-vector-logo.svg';
import './App.scss';

class App extends Component {
  constructor(){
    super()
    let datenow =  Date()
    this.state = {
      nextLaunchDate : '', 
      currentTime: datenow, 
    }
  }

componentDidMount(){
  fetch('https://api.spacexdata.com/v3/launches/next')
  .then(results => {
    return results.json(); 
  }).then(data => {
    this.setState({
      nextLaunchDate: data.launch_date_utc,   
    })
  })
}

  render(){
    return(
      <div className = 'counterContainer'>
        <h1>The next SpaceX launch will be on {(new Date(this.state.nextLaunchDate).toUTCString())}</h1>
        <h1>the current time is {new Date(this.state.currentTime).toUTCString()}</h1>
      </div>
    )
  }
}

export default App;
