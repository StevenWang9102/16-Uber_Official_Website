import React from "react";
import menu from "../img/icons/menu.png"
export const Navigation = props => {
  return (
      <nav id="navigation" className='navbar navbar-expand-md navbar-dark'>
        <a className='navbar-brand' href='#top'>
            Uber
        </a>

        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item nav-link'>Company</li>
            <li className='nav-item nav-link'>Safety</li>
            <li className='nav-item nav-link'>Help</li>
          </ul>
        </div>

        <div className='logging-area' >
          <ul className='login'>
            <li className='nav-item nav-link'>Log in</li>
            <li className='nav-item nav-link'>Sign Up</li>
          </ul>
        </div>
        
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          {/* <img src={menu} alt=""/> */}
          <span className='navbar-toggler-icon'></span>
        </button>
      </nav>
  );
};
