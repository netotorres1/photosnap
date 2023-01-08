import React from 'react'
import Footer from '../../components/shared/Footer/Footer'
import Navbar from '../../components/shared/Navbar/Navbar'
import PricingComponent from '../../components/pricing/PricingComponent/Pricing'
import Compare from '../../components/pricing/Compare/Compare'

const Pricing = () => {
  return (
    <div>
      <Navbar/>
      <PricingComponent />
      <Compare/>
      <Footer/>
    </div>
  )
}

export default Pricing