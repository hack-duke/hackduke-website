import React from 'react'
import classes from './Social.scss'

export const Social = () => (
  <div>
    <div className={classes.footerBackground}>
      <a className={classes.mlh}
        href={'https://mlh.io/seasons/na-2017/events?utm_source=na-2017&utm_medium=TrustBadge&utm_campaign=na-2017&utm_content=white'}>
        <img src={'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg'}
        alt={'Major League Hacking 2017 Hackathon Season'}/>
      </a>
      <div className={classes.contact}>
        <div className={classes.contactContainer}>

          <a className={classes.footerIcon} href={'mailto:hackers@hackduke.org'}>
            <i className={'fa fa-envelope'}></i>
          </a>
          <a className={classes.footerIcon} href={'https://www.facebook.com/hackduke'}>
            <i className={'fa fa-facebook'}></i>
          </a>
          <a className={classes.footerIcon} href={'https://twitter.com/hackduke'}>
            <i className={'fa fa-twitter'}></i>
          </a>
        </div>
        <div className={classes.copyright}>Copyright © 2016 HackDuke. </div>
      </div>
    </div>
  </div>
)

export default Social
