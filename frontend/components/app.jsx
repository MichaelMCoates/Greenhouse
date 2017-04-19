import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import NavigationBar from './navigation_bar/navigation_bar';
import ModalContainer from './modal/modal_container';

const App = ({ children }) => (
  <div>
    <ModalContainer/>
    <NavigationBar/>
    <h1>GREENHOUSE</h1>
    <GreetingContainer />
    { children }
  </div>
);

export default App;
