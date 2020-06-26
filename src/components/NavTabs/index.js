// Libraries
import React from 'react';

// Styles
import './index.css';

const PageBody = ({ onChange, active }) => {
  return (
    <div className="nav-tabs-bar">
      <div
        onClick={() => onChange('entries')}
        className={`nav-tabs-bar__item ${ active === 'entries' ? 'nav-tabs-bar__item--active' : ''}`}>
        <p>Entries</p>
      </div>
      <div
        onClick={() => onChange('bio')}
        className={`nav-tabs-bar__item ${ active === 'bio' ? 'nav-tabs-bar__item--active' : ''}`}>
        <p>I'm Christian</p>
      </div>
    </div>
  );
};

export default PageBody;
