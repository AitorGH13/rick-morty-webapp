import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

function Sidebar({ open, toggleSidebar }) {
  return (
    <Drawer open={open} onClose={toggleSidebar} className="sidebar">
      <List>
        <ListItem button component={Link} to="/" onClick={toggleSidebar}>
          <ListItemText primary="Inicio" />
        </ListItem>
        <ListItem button component={Link} to="/about" onClick={toggleSidebar}>
          <ListItemText primary="Sobre Nosotros" />
        </ListItem>
        <ListItem button component={Link} to="/contact" onClick={toggleSidebar}>
          <ListItemText primary="Contacto" />
        </ListItem>
      </List>
    </Drawer>
  );
}

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
