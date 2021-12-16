import React from 'react'
import  Profile from '../media/SS-1.jpg'
// import Profile from '../../public/media/SS-1.jpg'
import { Link, Routes, Route } from 'react-router-dom'
import Featured from '../components/Featured'



const Home = () => {
    return (
        <div className="home">
        <div id="homeIntro">
            <article>
                <h2>Hi, I'm Stephen Squire. <br/>
                I'm a Full Stack Web Developer, <br/>
                based out of St. John's, NL.
                </h2>
            <p>
                I am currently studying software development at Keyin College. My strengths lie in problem solving, critical analysis, 
                and the ability to learn new technologies quickly. Previously, I worked as a cook and then chef in the culinary industry, 
                another fast paced, deadline driven and team oriented work environment. I thrive under pressure and enjoy the
                challenge of recreating the vision of a client using the tools of the trade. 
            </p>
            </article>
            <figure>
                <img id="profilePic" src={Profile} alt="a pic of me" />
                <figcaption></figcaption>
            </figure>
            <Link id="contactButton" to="/contact">Contact Me</Link>
        </div>
        <div id="featuredWork">
            <h2 id="featuredTitle">Featured Work</h2>
            <div id="featuredWorkContainer">
                <Featured />
                {/* <Routes>
                    <Route path="/" element={<Featured/>} />
                </Routes> */}
                </div>

        </div>
        </div>
    )
}

export default Home
