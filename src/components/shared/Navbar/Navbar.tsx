import {useState} from 'react'
import './navbar.sass'

import {MdMenu, MdClose} from 'react-icons/md'

const Logo = require('./../../../assets/shared/desktop/logo.svg').default;

function Navbar() {

  const [openMenu, setOpenMenu] = useState(false) 

  const handleOpen = () => {
    setOpenMenu(!openMenu)

  }

  return (
    <header className='header'>
        <div className='container-content'>
            <img src={Logo} alt='Logo' className='logo' />
            <div className='container-navbar'>
                <nav className={openMenu !== true ? 'navbar' : 'open'} >
                    <div>
                      <button>Stories</button>
                      <button>Features</button>
                      <button className='btnPricing'>Pricing</button>
                    </div>
                    <button className='get-invite'>Get an invite</button>
                </nav>
            </div>
        </div>
        <button onClick={handleOpen} className='btnMenu'>{openMenu == true ? <MdMenu size={30} color={'#000'}/> : <MdClose size={30} color={'#000'}/>}</button>
    </header>
  )
}

export default Navbar