import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import NavigationBar from './navigation_bar/navigation_bar';
import ModalContainer from './modal/modal_container';
import Footer from './footer/footer';

const App = ({ children }) => (
  <div>
    <ModalContainer/>
    <NavigationBar/>
    <hr/>
    <div className="app-children">
      { children }
    </div>
    <Footer/>
  </div>
);

export default App;
