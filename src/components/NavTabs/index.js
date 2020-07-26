// Libraries
import React from 'react';

// Styles
import './index.css';

const NavTabs = ({ onChange, active }) => {
  return (
    <div className="nav-tabs-bar">
      <div
        onKeyDown={() => onChange('entries')}
        onClick={() => onChange('entries')}
        role="button"
        tabIndex="0"
        className={`nav-tabs-bar__item ${ active === 'entries' ? 'nav-tabs-bar__item--active' : ''}`}>
        <p>Entries</p>
      </div>
      <div
        onKeyDown={() => onChange('bio')}
        onClick={() => onChange('bio')}
        role="button"
        tabIndex="0"
        className={`nav-tabs-bar__item ${ active === 'bio' ? 'nav-tabs-bar__item--active' : ''}`}>
        <p>I'm Christian</p>
      </div>
      <div
        onKeyDown={() => onChange('personalProjects')}
        onClick={() => onChange('personalProjects')}
        role="button"
        tabIndex="0"
        className={`nav-tabs-bar__item ${ active === 'personalProjects' ? 'nav-tabs-bar__item--active' : ''}`}>
        <p>Projects</p>
      </div>
    </div>
  );
};

export default NavTabs;
