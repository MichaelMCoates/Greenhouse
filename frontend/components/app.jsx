import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import NavigationBar from './navigation_bar/navigation_bar';

const App = ({ children }) => (
  <div>
    <NavigationBar/>
    <h1>GREENHOUSE</h1>
    <GreetingContainer />
    { children }
  </div>
);

export default App;
