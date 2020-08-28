import React, { memo } from 'react';
import PropTypes from 'prop-types';

export const ToolHeader = memo((props) => {

  console.log('rendering toolheader');

  return (
    <header>
      <h1 className="page-header">{props.headerText}</h1>
    </header>
  );

});

ToolHeader.propTypes = {
  headerText: PropTypes.string.isRequired,
};