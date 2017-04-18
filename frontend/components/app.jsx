import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div>
    <h1>GREENHOUSE</h1>
    <GreetingContainer />
    { children }
  </div>
);

export default App;
