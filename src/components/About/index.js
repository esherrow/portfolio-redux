import React from 'react';
import coverImage from "../../assets/cover/BioPic.jpg";

function About () {
    return (
        <section className="my-5">
            <h1 id="about">About Me</h1>
            <img src={coverImage} className="my-2" style={{ width:"25%"}} alt="cover" />
            <div className="my-2">
                <p>
                    Engineering, Teaching, Training, Web Development.  
                    <br/>
                    I've done many things in my life, using the last to build on the next.
                    <br/><br/>    
                    Purdue, Ball State, Ivy Tech, Butler.
                    <br/>
                    Seeking knowledge has led down the path towards higher ed.
                    <br/><br/>
                    Friends, Family, Dance, Music.
                    <br/>
                    I try to stay grounded and enjoy life.
                    <br/><br/>
                    But Cats, Coffee, Chaos, and now Code, rule my life.
                </p>
            </div>
        </section>
    )
}

export default About;