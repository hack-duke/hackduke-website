import React from 'react'
import classes from './Hero.scss'

export const Hero = () => (
  <div>
    <div className={classes.hero}>
      <div className={classes.mainText}>
        <img src='hackduke-logo.png' alt='Hackduke Logo' />
        <h6>November 19-20, 2016</h6>
        <a className={classes.applyLink} href="http://www.google.com">  
          <button className={classes.homeButton}> Apply Now </button>
        </a>
      </div>
    </div>
  </div>
)

export default Hero
