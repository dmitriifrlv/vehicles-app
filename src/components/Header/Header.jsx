import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavbarContext } from '../../context/navbar.context';
import './Header.scss';

function Header() {
  const { setShowNavbar } = useContext(NavbarContext);

  const toggleModal = () => {
    setShowNavbar(prevState => setShowNavbar(!prevState));
  };

  return (
    <header className="header">
      <div className="container-fluid">
        <div className="icons_cont">
          <button
            type="button"
            className="icons topNavbarIcons"
            onClick={() => toggleModal()}
          >
            <i className="fas fa-bars icons" />
          </button>
          <button
            type="button"
            className="icons topNavbarIcons"
            onClick={() => window.location.reload()}
          >
            <i className="fas fa-sync-alt icons" />
          </button>
          <Link to="/" className="icons topNavbarIcons">
            <i className="fas fa-home" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
