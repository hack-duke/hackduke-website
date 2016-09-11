import React from 'react'
// import classes from './HomeView.scss'
import Hero from 'components/Hero'
import TracksPage from 'components/TracksPage'
import About from 'components/About'
import FAQ from 'components/FAQ'
import SponsorsPage from 'components/SponsorsPage'
import Social from 'components/Social'

export const HomeView = () => (
  <div>
    <Hero />
    <About />
    <TracksPage />
    <FAQ />
    <SponsorsPage />
    <Social />
  </div>
)

export default HomeView
