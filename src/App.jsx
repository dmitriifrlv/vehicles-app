import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import SiteRoutes from './utils/SiteRoutes';
import './App.scss';
import { NavbarContext } from './context/navbar.context';

function App() {
  const { showNavbar } = useContext(NavbarContext);

  return (
    <Router>
      <Nav />
      <div className={`App__wrapper-${showNavbar ? 'sidebar-open' : 'sidebar-closed'}`}>
        <SiteRoutes />
      </div>
    </Router>
  );
}

export default App;
