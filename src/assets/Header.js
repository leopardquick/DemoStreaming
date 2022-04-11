import React from "react";
import {Link} from 'react-router-dom'



let Header = () => {
    return (
    <nav>
      <ul className="homenav-list">
        <li className="homenav-item">
          <a href="/">Demo Streaming</a>
        </li>
        <li className="homenav-item">
          <a href="#">Login</a>
        </li>
        <li className="homenav-item">
          <button className="homebtn-primary">Start your free trial</button>
        </li>
      </ul>
    </nav>
    )
}

export default Header