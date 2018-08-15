import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = props => 
<nav className = "navbar navbar-default">
    <div className = "container-fluid">
        <div className = "navbar-header">
<Link className = "navbar-brand" to = "/">
    Clicky Game
</Link>
        </div>
    </div>
</nav>