// Libraries
import React, { useState } from 'react';

// Containers
import Entries from '../Entries';
import Bio from '../Bio';
import PersonalProjects from '../PersonalProjects';

// Components
import NavTabs from '../../components/NavTabs';

// Styles
import './index.css';

const PageBody = ({ posts }) => {
  const [ activeTab, setActiveTab ] = useState('entries');
  let BodyComponent = null;

  const handleTabChange = (newActive) => {
    setActiveTab(newActive);
  };

  switch (activeTab) {
    case 'entries':
      BodyComponent = Entries;
      break;
    case 'bio':
      BodyComponent = Bio;
      break;
    case 'personalProjects':
      BodyComponent = PersonalProjects;
      break;
    default:
      BodyComponent = Entries;
      break;
  }

  return (
    <>
      <NavTabs onChange={handleTabChange} active={activeTab} />
      <BodyComponent posts={posts} />
    </>
  );
};

export default PageBody;
