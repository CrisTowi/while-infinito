// Libraries
import React from 'react';

// Components
import Tag from '../Tag';


// Styles
import './index.css';

const Project = ({ title, description, technologies, url }) => {
  return (
    <a className={'Project__a'} target='_blank' href={url}>
      <div className='Project'>
        <div className="project__title">
          <h3>{title}</h3>
        </div>
        <div className='project__tags'>
          {technologies.map((technology) => <Tag key={`tag-${technology}`} title={technology} />)}
        </div>
        <div className="project__summary">
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
};

export default Project;
