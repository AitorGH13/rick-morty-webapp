import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar({ toggleSidebar }) {
  return (
    <div className="navbar">
      <IconButton color="inherit" onClick={toggleSidebar}>
        <MenuIcon />
      </IconButton>
      <div className="search-container"></div>
    </div>
  );
}

Navbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default Navbar;
