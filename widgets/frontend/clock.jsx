import React from "react";

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {time: new Date()};
    this.tick = this.tick.bind(this);
    this.intervalId;
  }

  render(){
    return (
      <div>
        <h1>
          Clock
        </h1>

        
        <div id="time">
          <h2>Date: </h2>
          <h2>{this.state.time.toDateString()}</h2>
          
        </div>

        
        <div id="date">
        <h2 >Time: </h2>
          <h2>
            {this.state.time.getHours()} : 
            {this.state.time.getMinutes()} : 
            {this.state.time.getSeconds()}
          </h2>
        
        </div>

        
      </div>
    )
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);
  }

  tick(){
    this.setState({time : new Date()})
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
    this.intervalId = 0;
  }
}

export default Clock;