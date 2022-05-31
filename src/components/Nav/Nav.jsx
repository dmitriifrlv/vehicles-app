import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarContext } from '../../context/navbar.context';
import './Nav.scss';

function Nav() {
  const { showNavbar, setShowNavbar } = useContext(NavbarContext);

  const navbarLinks = [
    { path: '/', icon: 'far fa-clipboard-user', name: 'Home' },
    { path: '/vehicles', icon: 'fas fa-truck-pickup', name: 'Vehicles' },
  ];

  const toggleSideNav = () => {
    setShowNavbar(false);
  };

  return (
    <div className="wrapper-main">
      <div className={`sidebar-main ${showNavbar ? 'sidebar-main-show' : 'sidebar-main-hide'}`}>
        <div className="sidebar-logo">
          <a href="#/" className={`simple-text ${showNavbar ? 'sidebar-logo-show' : 'sidebar-logo-hide'}`}>
            Test App
          </a>
        </div>
        <div className="sidebar-wrapper">
          <nav id="sidebar">
            <ul className="sidebar-links-list sidebar-links-icons">
              {navbarLinks.map(({ path, icon, name }) => (
                <li className="sidebar-links" key={name}>
                  <NavLink
                    end={name === 'Home'}
                    to={path}
                    className={({ isActive }) => (isActive ? 'selectedItem' : '')}
                    onClick={toggleSideNav}
                  >
                    <i className={icon} />
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Nav;
