import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopbarMenu from './components/TopbarMenu';
import LoginRegisterButtons from './components/LoginRegisterButtons';
import Footer from './components/Footer';
import CenteredContainer from './components/CenteredContainer';

const App = () => {
  return (
    <Router>

      <TopbarMenu />
      <CenteredContainer>
        <LoginRegisterButtons />
        <Footer />
      </CenteredContainer>


    </Router>
  );
};

export default App;
