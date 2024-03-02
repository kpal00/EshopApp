
// src/components/NavigationBar.js
import React from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Button, Link } from '@material-ui/core';
import { ShoppingCart as ShoppingCartIcon, Search as SearchIcon } from '@material-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const NavigationBar = () => {
  const handleLogout = () => {
    // Implement logout logic (clear authentication state, redirect, etc.)
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton component={RouterLink} to="/" color="inherit">
          <ShoppingCartIcon />
        </IconButton>

        {!isLoggedIn ? (
          <>
            <Link component={RouterLink} to="/login" color="inherit">
              Login
            </Link>
            <Link component={RouterLink} to="/signup" color="inherit">
              Signup
            </Link>
          </>
        ) : (
          <>
            <div>
              <IconButton color="inherit">
                <SearchIcon />
              </IconButton>
              <InputBase placeholder="Search…" />
            </div>

            <Button component={RouterLink} to="/home" color="inherit">
              Home
            </Button>

            <Button onClick={handleLogout} color="inherit">
              Logout
            </Button>

            {isAdmin && (
              <Button component={RouterLink} to="/add-products" color="inherit">
                Add Products
              </Button>
            )}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
