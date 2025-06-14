import React from 'react'
import Hero from '../components/blogy/hero/Hero'
import Lately from '../components/blogy/cards/lately/Lately'
import Stories from '../components/blogy/cards/stories/Stories'

function HomePage () {
  return (
    <div>
      <Hero/>
      <Stories/>
      <Lately/>
    </div>
  )
}

export default HomePage
