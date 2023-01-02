import React from 'react'
import './navbar.sass'

const Logo = require('./../../assets/shared/desktop/logo.svg').default;

function Navbar() {
  return (
    <header className='header'>
        <div className='container-content'>
            <img src={Logo} alt='Logo' className='logo' />
            <div className='container-navbar'>
                <nav>
                    <button>Stories</button>
                    <button>Features</button>
                    <button>Pricing</button>
                </nav>
                <button>Get an invite</button>
            </div>
        </div>
    </header>
  )
}

export default Navbar