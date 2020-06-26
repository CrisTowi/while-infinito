// Libraries
import React from 'react';

// Styles
import './index.css';

const Tag = ({ title }) => {
  return (
    <div className="tag">
      <p>{title} <span>x</span></p>
    </div>
  );
};

export default Tag;
