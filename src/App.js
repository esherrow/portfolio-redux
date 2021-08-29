import React, { useState } from 'react';
import About from './components/About';
import ContactForm from './components/Contact';
import Nav from './components/Nav';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [currentProject, setCurrentProject] = useState({ name: "" })
  const [categories, setCategories] = useState([]);
  const [resumeSelected, setResumeSelected] = useState(false)
  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        categories={categories}
        setCategories={setCategories}
        currentProject={currentProject}
        setCurrentProject={setCurrentProject}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      >

      </Nav>
      <main>
        {console.log( resumeSelected)}
        {contactSelected ? 
          <ContactForm></ContactForm>
         :

        portfolioSelected ?
          <Portfolio></Portfolio>
            :

        resumeSelected ?
          <Resume></Resume> 
            :
            (<>
              <About></About>

              
            </>

            )}
      </main>
      <footer className="row">
        <div className="col-sm-4 mb-5"></div>
        <div className="col-sm-4 mb-5">
          <a href="http://www.linkedin.com/in/elizabeth-sherrow" target="_blank"><img src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG7.png" alt="LinkedIn Logo" style={{width:"42px", height:"42px"}}></img></a>
          <a href="http://https://github.com/esherrow" target="_blank"><img src="https://pngimg.com/uploads/github/github_PNG19.png" alt="GitHub Logo" style={{width:"42px", height:"42px"}}></img></a>
          <a href="http://www.linkedin.com/in/elizabeth-sherrow" target="_blank"><img src="https://pngimg.com/uploads/twitter/twitter_PNG7.png" alt="Twitter Logo" style={{width:"42px", height:"42px"}}></img></a>
        </div>
        <div className="col-sm-4 mb-5"></div></footer>
    </div>
  );
}

export default App;
