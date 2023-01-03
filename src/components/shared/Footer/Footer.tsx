import React from 'react'
import './footer.sass'

const logo = require('./../../../assets/shared/desktop/logo.svg').default;
const facebook = require('./../../../assets/shared/desktop/facebook.svg').default;
const youtube = require('./../../../assets/shared/desktop/youtube.svg').default;
const twitter = require('./../../../assets/shared/desktop/twitter.svg').default;
const instagram = require('./../../../assets/shared/desktop/instagram.svg').default;


type Props = {}

function Footer({}: Props) {
  return (
    <footer className='footer'>
        <div className='container-content'>
            <div className='social-media'>
                <img src={logo} alt='logo' className='logo' />
                <div>
                    <img src={facebook} alt='Facebook' />
                    <img src={youtube} alt='Youtube' />
                    <img src={twitter} alt='Twitter' />
                    <img src={instagram} alt='Instagram' />
                </div>
            </div>
            <nav className='nav-menu'>
                <button>Home</button>
                <button>Stories</button>
                <button>Features</button>
                <button>Pricing</button>
            </nav>
            <div className='btn'>
                <button>Get an invite</button>
                <span>Copyright 2019. All Rights Reserved</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer