import React from 'react';
import logo from './zodiac_wheel_modified.svg';
import './App.css';
import Wheel from './Wheel'


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentPosition: 0
    }
  }
  componentDidMount(){
    setInterval(this.rotate, 2500);
  }

  rotate = () => {
    this.setState(state => {
      return {currentPosition: state.currentPosition += 360/365}
    });
  }

  render(){
    const {currentPosition} = this.state
    return (
      <main className="App">
        <Wheel currentPosition={currentPosition} />
      </main>
    );
  }
}

export default App;

