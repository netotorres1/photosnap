import './footer.sass'

import { Link } from 'react-router-dom';

const facebook = require('./../../../assets/shared/desktop/facebook.svg').default;
const youtube = require('./../../../assets/shared/desktop/youtube.svg').default;
const twitter = require('./../../../assets/shared/desktop/twitter.svg').default;
const instagram = require('./../../../assets/shared/desktop/instagram.svg').default;

const arrow = require('./../../../assets/shared/desktop/arrow-white.svg').default;
const logowhite = require('./../../../assets/shared/desktop/logo-white.svg').default;

function Footer() {
  return (
    <footer className='footer'>
        <div className='container-content-footer'>
            <div className='social-media'>
                <img src={logowhite} alt='logo' className='logo' />
                <div>
                    <img src={facebook} alt='Facebook' />
                    <img src={youtube} alt='Youtube' />
                    <img src={twitter} alt='Twitter' />
                    <img src={instagram} alt='Instagram' />
                </div>
            </div>
            <nav className='nav-menu'>
                <button><Link to={'/'}>Home</Link></button>
                <button><Link to={'/stories'}>Stories</Link></button>
                <button><Link to={'/features'}>Features</Link></button>
                <button><Link to={'/pricing'}>Pricing</Link></button>
            </nav>
            <div className='btn'>
                <div>
                    <button>Get an invite<img alt='button' src={arrow} /></button>
                    <span>Copyright 2019. All Rights Reserved</span>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer