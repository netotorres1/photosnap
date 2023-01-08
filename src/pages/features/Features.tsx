import React from 'react'
import Footer from '../../components/shared/Footer/Footer'
import Navbar from '../../components/shared/Navbar/Navbar'
import FeaturesComponent from '../../components/features/FeaturesComponent/Features'
import Functions from '../../components/features/Functions/Functions'
import Getinvite from '../../components/features/GetInvite/Getinvite'

type Props = {}

const Features = (props: Props) => {
  return (
    <div>
      <Navbar />
      <FeaturesComponent />
      <Functions/>
      <Getinvite/>
      <Footer/>
    </div>
  )
}

export default Features