import React from 'react'
import Footer from '../../components/shared/Footer/Footer'
import Navbar from '../../components/shared/Navbar/Navbar'
import Cards from '../../components/stories/Cards/Cards'
import Featured from '../../components/stories/Featured/Featured'

type Props = {}

const Stories = (props: Props) => {
  return (
    <div>
      <Navbar/>
      <Featured/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default Stories