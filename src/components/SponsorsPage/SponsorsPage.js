import React from 'react'
import classes from './SponsorsPage.scss'

const aboutText= ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
                  "do eiusmod tempor incididunt ut labore et dolore magna aliqua"];

export const SponsorsPage = () => (
  <div className={classes.sponsors}>
    <div className={'container text-center'}>
      <h1 className={classes.header}>SPONSORS</h1>
      <p className={classes.tracksText}>
        {aboutText[0]} <br/>
        {aboutText[1]}
      </p>
    </div>
  </div>
)

export default SponsorsPage
