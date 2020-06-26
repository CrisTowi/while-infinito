// Libraries
import React from 'react';

// Index
import './index.css';

// Assets
import chris from '../../../public/chris.jpg';

const Bio = () => {
  return (
    <div className="bio-container">
      <div className="bio-info-container">
        <div className="main-info">
          <div className="bio-pic">
            <img alt="bio-pic" src={chris} />
          </div>
          <div className="bio-contact">
            <p>
              Software Engineer <a className="bio-link" href="https://twitter.com/Cris_Towi" target="_blank">@Cris_Towi</a> and organizer of <a className="bio-link" href="https://twitter.com/eventloopmx"  target="_blank">@eventloop</a>. Code is my job but knowledge is my passion.
            </p>
          </div>
        </div>
        <div className="blue-divider blue-divider--left"></div>
        <div className="secondary-info">
          <h3>Hi everyone, I’m Christian Consuelo!</h3>
          <p>
            Ever dream of changing the world or making a difference? You are invited to roll up your sleeves and join a group of entrepreneurs on a journey to change lives by changing systems. Built from Acumen’s years of experience investing in social entrepreneurs, this course will also feature firsthand stories and advice from 4 inspiring founders:
          </p>
          <p><a className="bio-link" href="www.linkedin.com/in/cconsuelo" target="_blank">www.linkedin.com/in/cconsuelo</a></p>
          <p><a className="bio-link" href="mailto:christian.consuelo2@gmail.com">christian.consuelo2@gmail.com</a></p>
          <p>Wanna see my Resume? <a className="bio-link" href="https://while-infinito-entries.s3.amazonaws.com/Christian_Consuelo_resume_2020.pdf" target="_blank">Take a look</a></p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
