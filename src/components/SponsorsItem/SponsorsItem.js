import React from 'react'
import classes from './sponsorsitem.scss'

/*
* props to pass in:
* @param {string} imageAltText (text to display if image not found)
* @param {string} imageUrl (url of logo to display)
* @param {string} sponsorUrl (link to website of sponsor)
*/

export const SponsorsItem = (props) => (
  <div>
    <div>
      <a href="{props.sponsorUrl}"><img alt="{props.imageAltText}" src="{props.imageUrl}"></a>
    </div>
  </div>
)

SponsorsItem.propTypes = {
  imageAltText: React.PropTypes.string.isRequired,
  imageUrl: React.PropTypes.string.isRequired,
  sponsorUrl: React.PropTypes.string.isRequired
}

export default SponsorsItem
