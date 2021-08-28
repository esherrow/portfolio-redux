import React from 'react';
import Card from '../Card'

function Portfolio() {
  return (
    <>
    <section className="my-5">
      <h1 id="portfolio">Portfolio</h1>
    </section>
    <div className="row">
    <Card />
    <Card />   
    <Card />  
    <Card />  
    <Card />  
    <Card />
</div>
    </>
  );
}

export default Portfolio;