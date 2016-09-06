import React from 'react'
import classes from './SponsorsPage.scss'

// Static content for page
const title = 'SPONSORS'
const aboutText = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
                  'do eiusmod tempor incididunt ut labore et dolore magna aliqua']
const sponsorButtonText = 'Sponsor Us'

// Page layout
export const SponsorsPage = () => (
  <div className={classes.sponsors}>
    <div className={'container text-center'}>
      <h1 className={classes.header}>{title}</h1>
      <p className={classes.tracksText}>
        {aboutText[0]}
        <br />
        {aboutText[1]}
      </p>
      <br />
      <button className={classes.homeButton}>{sponsorButtonText}</button>
      <div className={classes.section}>
        <div className={classes.logobox}>
        </div>
      </div>
    </div>
  </div>
)

export default SponsorsPage
