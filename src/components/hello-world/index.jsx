import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/images/lsst_logo_small.png';

const HelloWorld = ({ title }) => (
  <div className="hello-world">
    <img className="logo" src={logo} alt="LSST Logo" />
    <div className="message">{title}</div>
  </div>
);

HelloWorld.propTypes = {
  title: PropTypes.string,
};

export default HelloWorld;
