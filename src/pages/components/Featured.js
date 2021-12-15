import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";
import WeatherApp1 from "./media/WeatherApp1.png";
import WeatherApp2 from "./media/WeatherApp2.png";
import WeatherApp3 from "./media/WeatherApp3.png";
import Design from "./media/Design.png";
import Tastelife from "./media/Tastelife.png";
import Home from "./media/Home.png";
import Menu from "./media/Menu.png";
import Order from "./media/Order.png";

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
