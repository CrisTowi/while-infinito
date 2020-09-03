// Libraries
import React from 'react';

// Components
import Project from '../../components/Project';

// Styles
import './index.css';

const PersonalProjects = () => {
  return (
    <>
      <Project
        title={"AlgoVis"}
        technologies={[
          'JavaScript', 'D3.js', 'React.js', 'HTML', 'CSS'
        ]}
        description={"Algorithm visualization platform with D3. If you are a student or preparing a job interview this interactive platform will be helpful."}
        url={'http://algovis.whileinfinito.com/'}
      />
      <Project
        title={"Conway's Game of Life"}
        technologies={[
          'JavaScript', 'Svelte', 'HTML', 'CSS'
        ]}
        description={"A classic interactive implementation of the Conway's Game of Life. You can create your own automatas by using your mouse or drag and drop pre-defined automatas to check the different patterns you can play around."}
        url={'http://game-of-life.whileinfinito.com/'}
      />
      <Project
        title={"Chess"}
        technologies={[
          'JavaScript', 'Svelte', 'HTML', 'CSS'
        ]}
        description={"A chess game you can access and play in a single computer. It already have all chess rules implemented and you can choose between different time limits."}
        url={'http://chess.whileinfinito.com/'}
      />
      <Project
        title={"Fast Memory Game"}
        technologies={[
          'JavaScript', 'Svelte', 'HTML', 'CSS', 'CSS animations'
        ]}
        description={"Challenge your memory and play this Fast-Memory game implemente from scratch with CSS animation. You can play it from your mobile device too."}
        url={'http://fast-memory.whileinfinito.com/'}
      />
      <Project
        title={"Cookie Crasher"}
        technologies={[
          'JavaScript', 'Svelte', 'HTML', 'CSS', 'CSS animations'
        ]}
        description={"In this game you will have to chase and click over bouncing cookies to get points. Invest those points to get more cookies and get the highest score you can!"}
        url={'https://cookie-crasher.whileinfinito.com/'}
      />
    </>
  );
};

export default PersonalProjects;
