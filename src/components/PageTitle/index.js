// Libraries
import React from 'react';

// Components
import logo from '../../../static/while_logo.svg';

// Styles
import './index.css';

const PageTitle = () => {
  return (
    <>
      <a href="/">
        <div className="page-title">
          <img className="bio-pic" alt="bio-pic" src={logo} />
        </div>
      </a>
      <div className="page-summary">
        <p>"La humanidad necesita gente sabia, no rica. La diferencia radica en que cuando se parte, un billete se parte, pero una idea se multiplica"</p>
        <p>-Danger AK</p>
      </div>
    </>
  );
};

export default PageTitle;
