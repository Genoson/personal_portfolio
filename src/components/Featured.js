import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";
import WeatherApp1 from "../media/WeatherApp1.png";
import WeatherApp2 from "../media/WeatherApp2.png";
import WeatherApp3 from "../media/WeatherApp3.png";
import Design from "../media/Design.png";
import Tastelife from "../media/Tastelife.png";
import Home from "../media/Home.png";
import Menu from "../media/Menu.png";
import Order from "../media/Order.png";

const Featured = () => {
  const [featuredProject, setFeaturedProject] = useState(0);

  const nextProject = () => {
    setFeaturedProject(featuredProject +1);
  };

  const prevProject = () => {
    setFeaturedProject(featuredProject -1);
  };

  if (featuredProject === 0) {
  return (
    <div className="featured">
      <div className="featured-text">
        <h2>Weather App</h2>
        <p>In this project I built a simple weather app in react using the openweathermap.org API. <br/>
        I completed this project on my own. As my first react project there were many hurdles in achieving the desired functionality.
        In it's current state it uses local storage to allow a user to register for the app, and then performs a fetch using the API to report
         the current weather, 7 days of forecasting, and any current weather alerts. <br/>
         This app is hosted on github and linked on my projects page, if you want to check it out be careful inputting your hometown as that
         is used to perform the fetch of weather information. It is checked against 200,000 cities in the database and is fairly specific (St. John's 
         not st johns for example).  </p>
        </div>
      <div className="featured-image">
        <img src={WeatherApp1} width="30%"></img>
        <img src={WeatherApp2} width="30%"></img>
        <img src={WeatherApp3} width="30%"></img>
      </div>
      <div className="featured-buttons">
        <div></div>
        <Link id="projectsButton" to="/projects">Projects</Link>
        <button id="nextButton" onClick={nextProject}>Next</button>
        </div>
    </div>
  )} else if (featuredProject === 1) {
  return (
    <div className="featured">
      <div className="featured-text">
        <h2>Restaurant Website Sprint</h2>
        <p>In this project I built a restaurant website using HTML, CSS, and JavaScript. <br/>
        This was a project to come up with a personal design and achieve that as a website.
        </p>
        </div>
      <div className="featured-image">
        <img src={Home} width="30%"></img>
        <img src={Menu} width="30%"></img>
        <img src={Order} width="30%"></img>
      </div>
      <div className="featured-buttons">
        
        <button  id="prevButton" onClick={prevProject}>Prev</button>
        <Link  id="projectsButton" to="/projects">Projects</Link>
        <button id="nextButton"  onClick={nextProject}>Next</button>
        </div>
    </div>
  )} else if (featuredProject === 2) {
  return (
    <div className="featured">
      <div className="featured-text">

        <h2>Recipe Blog</h2>
        <p>In this project I built a recipe blog using HTML and CSS <br/>
        This was a personal challenge project to recreate the design created by my instructor in a design class using design tools
        as a website using only HTML and CSS. I managed to include some rudimentary functionality and reactivity implied by the design using 
        only CSS, via media queries and before/after states.
        </p>
        </div>
      <div className="featured-image">
        <img src={Design} width="40%"></img>
        <img src={Tastelife} width="40%"></img>
        
      </div>

      <div className="featured-buttons">
        <button id="prevButton" onClick={prevProject}>Prev</button>
        <Link  id="projectsButton" to="/projects">Projects</Link>
        <div></div>
        
        </div>
    </div>
  )}};


export default Featured;
