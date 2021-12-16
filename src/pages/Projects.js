import React, {useEffect} from 'react'
import Featured from "../components/Featured"

const Projects = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
        
    }, [])
    return (
        <div id="projectsPage">
            <h1>Projects site currently under development</h1>
            <p>Please see the below section for a sampling of whats to come.</p>
            <p>Check out my weather app in action here: <a href="https://genoson.github.io/weatherapp.github.io/" target="_blank">Weather App</a></p>
            <div id="featuredWorkContainer">
                <Featured />
                
                </div>
        </div>
    )
}

export default Projects
