import React from 'react';
import currentResume from '../../assets/files/ESherrowCV.docx'

function Resume() {
  return (
    <section className="my-5">
      <h1 id="resume">Resume</h1>
        <div className="my-2">
        <p>
          Download my <a href={currentResume} download><span>resume</span></a>.
        </p>
        <p>
          Front End Proficiencies
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Materialize</li>
            <li>Bulma</li>
            <li>jQuery/jQuery UI</li>
            <li>Responsive Design</li>
          </ul>
          Back End Proficiencies
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Benchmark.js</li>
            <li>Handlebars.js</li>
            <li>MySQL/Sequelize</li>
            <li>NoSQL</li>
            <li>MongoDB/Mongoose</li>
            <li>GraphQL</li>
            <li>APIs</li>
          </ul>
          Other
          <ul>
            <li>Git</li>
            <li>Heroku</li>
            <li>Insomnia Core</li>
            <li>Chrome DevTools</li>
            <li>Google Lighthouse</li>
          </ul>
        </p>
      </div>
    </section>
  );
}

export default Resume;