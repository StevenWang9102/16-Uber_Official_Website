import React from "react";
import { useState } from "react";
import { NavToggle } from "../Components/NavToggle";
import menu from "../img/nav-toggle/menu.jpg";

export const Navigation = (props) => {
  const [toggleClicked, setToggleClicke] = useState(1);

  return (
    <section>
      <nav id='navigation' className='navbar navbar-expand-md navbar-dark'>
        <a className='navbar-brand' href='#top'>
          Uber
        </a>
        <button
          onClick={() => {
            setToggleClicke(toggleClicked + 1);
          }}
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span>
            <img src={menu} alt='' />
          </span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav'>
            <li className='nav-item nav-link'>Company</li>
            <li className='nav-item nav-link'>Safety</li>
            <li className='nav-item nav-link'>Help</li>
          </ul>
        </div>

        <ul className='login-area'>
          <li className='nav-item nav-link'>Log in</li>
          <li className='nav-item nav-link'>Sign Up</li>
        </ul>
      </nav>

      {toggleClicked % 2 === 0 ? <NavToggle/> : null}
      
    </section>
  );
};
