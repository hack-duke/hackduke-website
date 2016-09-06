import React from 'react'
import classes from '../About/About.scss'
import SponsorsItem from 'components/SponsorsItem'
import { Row, Col } from 'react-bootstrap'
import a16z from 'static/sponsors/a16z.png'
import aboutme from 'static/sponsors/aboutme.png'
import akamai from 'static/sponsors/akamai.png'
import appia from 'static/sponsors/appia.png'
import apt from 'static/sponsors/apt.png'
import att from 'static/sponsors/att-old.png'
import au from 'static/sponsors/au.png'
import aws from 'static/sponsors/aws.png'
import bronto from 'static/sponsors/bronto.png'

const sponsors_urls = ["http://google.com", "http://google.com", "http://google.com", "http://google.com", "http://google.com", "http://google.com", "http://google.com", "http://google.com", "http://google.com"]
const image_urls = [a16z, aboutme, akamai, appia, apt, att, au, aws, bronto]

const sponsorsItemAtIndex = (url, index, mod) => {
  if(index % 3 === mod) {
    return <SponsorsItem key={index} imageUrl={url} sponsorUrl={sponsors_urls[index]}/>
  } 
} 

export const SponsorsPage = () => (
  <div>
    <div className={'container text-center'}>
      <h1 className={classes.header}>SPONSORS</h1>
      <p className={classes.tracksText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      </p>
      <Row>
        <Col md={4}>
            {image_urls.map((url, index) =>  {
                return sponsorsItemAtIndex(url, index, 0)
              }
            )}
        </Col>
        <Col md={4}>
          {image_urls.map((url, index) =>  {
              return sponsorsItemAtIndex(url, index, 1)
            }
          )}
        </Col>
        <Col md={4}>
          {image_urls.map((url, index) =>  {
              return sponsorsItemAtIndex(url, index, 2)
            }
          )}
        </Col>
      </Row>
    </div>
  </div>
)

export default SponsorsPage
