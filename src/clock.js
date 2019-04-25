import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.tock()
  }

  tock = () => {
    setInterval(
      () => this.tick(),
      1000
    );
  }

  tick = () => {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>現在は{this.state.date.toLocaleTimeString()}ですビーム</h1>
      </div>
    );
  }
}


export default Clock;
