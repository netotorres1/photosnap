import {useState} from 'react'
import { Link } from 'react-router-dom';
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
            <Link to={'/'}><img src={Logo} alt='Logo' className='logo' /></Link>
            <div className='container-navbar'>
                <nav className={openMenu === false ? 'navbar' : 'open'} >
                    <div>
                      <button><Link to={'/stories'}>Stories</Link></button>
                      <button><Link to={'/features'}>Features</Link></button>
                      <button className='btnPricing'><Link to={'/pricing'}>Pricing</Link></button>
                    </div>
                    <button className='get-invite'>Get an invite</button>
                </nav>
            </div>
        </div>
        <button onClick={handleOpen} className='btnMenu'>{openMenu == false ? <MdMenu size={30} color={'#000'}/> : <MdClose size={30} color={'#000'}/>}</button>
    </header>
  )
}

export default Navbar