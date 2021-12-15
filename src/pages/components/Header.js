import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div id="headerContents">
            <h1 id="optionalTitle">Stephen Squire Portfolio</h1>
            <nav>
                <Link className="headerNav" to="/">Home</Link>
                <Link className="headerNav" to="/about">About</Link>
                <Link className="headerNav" to="/projects">Projects</Link>
                <Link className="headerNav" to="/contact">Contact</Link>
            </nav>
            </div>
        </header>
    )
}

export default Header
