import React from 'react'
import BlockFour from '../../components/Home/BlockFour/BlockFour'
import BlockOne from '../../components/Home/BlockOne/BlockOne'
import BlockThree from '../../components/Home/BlockThree/BlockThree'
import BlockTwo from '../../components/Home/BlockTwo/BlockTwo'
import ReadStorie from '../../components/Home/ReadStorie/ReadStorie'
import Footer from '../../components/shared/Footer/Footer'
import Navbar from '../../components/shared/Navbar/Navbar'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
        <Navbar/>
        <BlockOne/>
        <BlockTwo/>
        <BlockThree/>
        <ReadStorie/>
        <BlockFour/>
        <Footer/>
    </div>
  )
}

export default Home