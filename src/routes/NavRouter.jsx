import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';

const NavRouter = ({ path, children }) => (
  <Route path={path}>
    <NavBar />
    {children}
  </Route>
);

NavRouter.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavRouter;
