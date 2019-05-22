import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/images/lsst_logo_small.png';

const HelloWorld = ({ title }) => (
  <main className="hello-world">
    <img className="logo" src={logo} alt="LSST Logo" />
    <h1 className="message">{title}</h1>
  </main>
);

HelloWorld.propTypes = {
  title: PropTypes.string,
};

export default HelloWorld;
