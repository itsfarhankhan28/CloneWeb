import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import FeaturedDest from '../components/FeaturedDest'
import Homes from '../components/Homes'
import ExploreAirbnb from '../components/ExploreAirbnb'
import Herosection from '../components/Herosection'

const Homepage = () => {
  return (
    <div>
      <Nav/>
      <Herosection/>
      <ExploreAirbnb/>
      <Homes/>
      <FeaturedDest/>
      <Footer/>
    </div>
  )
}

export default Homepage
