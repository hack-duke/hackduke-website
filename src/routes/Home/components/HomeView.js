import React from 'react'
import classes from './HomeView.scss'
import Hero from 'components/Hero'
import TracksPage from 'components/TracksPage'

export const HomeView = () => (
  <div>
    <Hero />
    <TracksPage />
  </div>
)

export default HomeView
