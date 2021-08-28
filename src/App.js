import React, { useState } from 'react';
import About from './components/About';
import ContactForm from './components/Contact';
import Nav from './components/Nav';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [currentCategory, setCurrentCategory] = useState({ name: "" })
  const [categories, setCategories] = useState([]);
  const [resumeSelected, setResumeSelected] = useState(false)
  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        categories={categories}
        setCategories={setCategories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
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
      <footer>LINKS TO OTHER THINGS</footer>
    </div>
  );
}

export default App;
