import React from 'react';


function Nav(props) {


  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          Elizabeth Sherrow - A Portfolio
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => {
              props.setContactSelected(false)
              props.setResumeSelected(false)
              props.setPortfolioSelected(false)
            }}>
              About Me
            </a>

          </li>
          <li className="mx-2">
            <a data-testid="portfolio" href="#portfolio" onClick={() => {
              props.setPortfolioSelected(true)
              props.setContactSelected(false)
              props.setResumeSelected(false)
              }}>
                Portfolio
            </a>
          </li> 
          <li className="mx-2">
            <a data-testid= "resume" href="#resume" onClick={() => {
              props.setResumeSelected(true)
              props.setContactSelected(false)
              props.setPortfolioSelected(false)
            }}>Resume</a>
          </li>
          <li className="mx-2">
            <a dataa-testid="contact-form" href="#contact-form" onClick={() => {
              props.setContactSelected(true)
              props.setResumeSelected(false)
              props.setPortfolioSelected(false)
              }}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
