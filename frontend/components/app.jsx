import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import NavigationBar from './navigation_bar/navigation_bar';
import Modal from './modal/modal';

const App = ({ children }) => (
  <div>
    <Modal/>
    <NavigationBar/>
    <h1>GREENHOUSE</h1>
    <GreetingContainer />
    { children }
  </div>
);

export default App;
