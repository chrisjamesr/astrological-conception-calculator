import React from 'react';

import './App.css';
import Wheel from './Wheel';
import WheelDisplay from './WheelDisplay';
import { dayOfYear } from './lib/sign-calc';

const todayDegrees = dayOfYear * 360 / 365;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPosition: -15,
    }
  }

  componentDidMount() {
    setTimeout(() => this.rotate(todayDegrees), 500);
  }

  rotate = (deg = this.state.currentPosition) => {
    this.setState({
      currentPosition: deg - 15,
    });
  }

  handleClickForward = () => {
    this.rotate(this.state.currentPosition + 40 * 7);
  }

  handleClickToday = () => {
    this.rotate(todayDegrees);
  }

  render() {
    const { currentPosition } = this.state
    return (
      <main className="App">
        <h1>V</h1>
        <Wheel currentPosition={currentPosition} />
        <WheelDisplay day={currentPosition}
          jumpForward={this.handleClickForward}
          jumpToday={this.handleClickToday}
        />

      </main>
    );
  }
}

export default App;

