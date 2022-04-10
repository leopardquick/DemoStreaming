import React from "react";
import {Link} from 'react-router-dom'

export default function HomeCard(){
    return (
        <div  className="boxContainer">
          <Link className="Homebox" to={"/movie"}>
            <center>movie</center>
          </Link>
          <Link className="Homebox" to={"/series"}>
            <center>series</center>
          </Link>
        </div>
    )
}