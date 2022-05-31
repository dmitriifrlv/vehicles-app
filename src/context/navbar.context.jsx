import React, { createContext, useState, useMemo } from 'react';

export const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [showNavbar, setShowNavbar] = useState(true);

  const value = useMemo(() => ({
    showNavbar, setShowNavbar,
  }), [showNavbar, setShowNavbar]);

  return (
    <NavbarContext.Provider value={value}>
      {children}
    </NavbarContext.Provider>
  );
};
