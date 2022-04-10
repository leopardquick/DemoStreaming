import React from "react";
import {Link} from 'react-router-dom'



let Header = () => {
    return (
    <nav className="navbar navbar-dark bg-primary customColor">
        <div className="container-fluid">
         <h2> <a className="navbar-brand" href="/">Demo Streaming</a> </h2>
        </div>
      </nav>
    )
}

export default Header