import React from 'react';
import Greeting from './greeting';
import ThreeGreeting from './threegreeting';
import Clock from './clock';

class App extends React.Component {
  render() {
    return (
      <div>
        <Greeting name='world' />
        <ThreeGreeting />
        <Clock />
      </div>
    );
  }
}

export default App;
