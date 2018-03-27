
import React from 'react';

class About extends React.Component {
  render() {
    return(
      <div>
        <h1 style={{padding: '5px', fontWeight: 'bold',
          textAlign: 'center', color: 'black'}}>
          About
        </h1>
        <p style={{padding: '5px', fontSize: '19px',
          textAlign: 'center', margin: '2rem'}}>
          My name is Bill Chen, a recent graduated Master student from Auckland University of Technology (AUT).
          I'm currently looking for an IT job in New Zealand. I build this website to show my poor programming,
          operation, and maintence skills. If you think I am appropriate to fit in one job in your company, please
          don't hesitate to contact me. Hope you guys enjoy it.
        </p>
        <p style={{padding: '5px', fontSize: '19px',
          textAlign: 'center', margin: '2rem'}}>
          The technologies that power this project are: <br/>
          <span style={{fontWeight: 'bold'}}>Front-end: </span>
          <span style={{color: 'blue'}}>JavaScript, ReactJS, react-bootstrap</span>
          <br />
          <span style={{fontWeight: 'bold'}}>Back-end: </span>
          <span style={{color: 'blue'}}>
            Java, Spring, Spring Boot, HyperSQL, Erlang
          </span>
          <br />
          <span style={{fontWeight: 'bold'}}>Server-side: </span>
          <span style={{color: 'blue'}}>Amazon AWS, Linux Ubuntu, Nginx, HAProxy, MySQL, Jenkins, Git</span>
        </p>
        <div>
          <br />
        </div>
      </div>
    )
  }
}

export default About;
