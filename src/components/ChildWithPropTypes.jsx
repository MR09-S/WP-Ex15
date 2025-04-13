import React from 'react';
import PropTypes from 'prop-types';

const Child = ({ msg }) => {
  return <h2>Validated Message: {msg}</h2>;
};

Child.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default Child;
