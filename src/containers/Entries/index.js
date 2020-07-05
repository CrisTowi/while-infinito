// Libraries
import React from 'react';

// Components
import Entry from '../../components/Entry';
// import Tag from '../../components/Tag';

// Styles
import './index.css';

const Entries = ({ posts }) => {
  return (
    <div className='entries-container'>
      <p className='entries-count'>
        {`${posts.length || 0} ENTRADAS`}
      </p>
      <div className="entries-info-container">
        <div className="entries-container">
          {
            posts.map((entry) => (
              <Entry key={`entry-${entry.id}`} {...entry} />
            ))
          }
        </div>
        <div className="aside-info">
          <div className="info-container">
            <div className="tags-container">
              {/* <Tag title="Javascript"/>
              <Tag title="React"/> */}
            </div>
            <div className="info-aknowledgment">
              <p>I’m updating with more cool projects! Want to collaborate? Send me a tweet. (<a className="bio-link" href="https://twitter.com/Cris_Towi" target="_blank" rel="noreferrer">@Cris_Towi</a>)</p>
            </div>
            <div className="blue-divider blue-divider--right"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entries;
