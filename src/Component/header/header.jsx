import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
// import{Location} from 'react-icons/fa'

export default function header() {
  return (
    <>
      <header>
        <div className="logo">
          <img src="./jlogo.svg" alt="logo" />
        </div>

        {/* Search bar */}
        {/* <div className="search">
          <div className="location">
            
              <i className="fa fa-location-dot loc"></i>
          
            <input
              type="text" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Location "/>
          </div>
          <div className="prodsearch"></div>
        </div> */}

        {/* For Menus */}
        <div className="menu" active>
          <Link to="/hire" id="menu">
            We are Hiring
          </Link>
          <Link to="/invest" id="menu">
            Investor Relations
          </Link>
          <Link to="/adv" id="menu">
            <i className="fa fa-bullhorn"></i> Advertise
          </Link>
          <Link to="/freeList" id="menu">
            <i className="fas fa-chart-line"></i> Free Listing
          </Link>
          <Link to="/notification" id="menu">
            <i className="fa-regular fa-bell"></i>
          </Link>
        </div>

        <div className="profile">
          <img src="./profile.jpg" alt="" />
        </div>
      </header>
    </>
  );
}
