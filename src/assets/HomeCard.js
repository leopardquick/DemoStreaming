import React from "react";
import {Link} from 'react-router-dom'

export default function HomeCard(){
    return (
        // <div  className="boxContainer">
        //   <Link className="Homebox" to={"/movie"}>
        //     <center>movie</center>
        //   </Link>
        //   <Link className="Homebox" to={"/series"}>
        //     <center>series</center>
        //   </Link>
        // </div>

        <div className="homeContainer">
          <div className="homeCard">
            <div className="homeBox">
              <div className="homeContent">
                <h2>01</h2>
                <h3>Movies</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a href="/movie">Watch</a>
              </div>
            </div>
          </div>
          <div className="homeCard">
            <div className="homeBox">
              <div className="homeContent">
                <h2>02</h2>
                <h3>Series</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a href="/series">Watch</a>
              </div>
            </div>
          </div>
          
        </div>
    )
}