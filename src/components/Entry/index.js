// Libraries
import React from 'react';
import { Link } from 'gatsby';

// Styles
import './index.css';

const Entry = ({ node }) => {
  return (
    <div class="entry">
      <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
        <div className="entry__title">
          <h3>{node.frontmatter.title}</h3>
        </div>
      </Link>
      <div className="entry__date">
        <p>{node.frontmatter.date}</p>
        <div className="entry__date__divider"></div>
        <p>{`${5} mins read`}</p>
      </div>
      <div className="entry__summary">
        <p>{node.frontmatter.description}</p>
      </div>
      <div className="entry__author">
        <p>Christian Consuelo</p>
      </div>
    </div>
  );
};

export default Entry;
