import React from 'react'

import './blockfour.sass'

const responsive = require('./../../../assets/features/desktop/responsive.svg').default;

const nolimite = require('./../../../assets/features/desktop/no-limit.svg').default;

const embed = require('./../../../assets/features/desktop/embed.svg').default;

function BlockFour() {
  return (
    <section className='section-block-four'>
        <div className='container-content'>
            <div>
                <img alt='responsive' src={responsive} />
                <h2>100% Responsive</h2>
                <p>No matter which the device you’re on, our site is fully responsive and stories 
                    look beautiful on any screen.</p>
            </div>
            <div>
                <img alt='no-limite' src={nolimite} />
                <h2>No Photo Upload Limit</h2>
                <p>Our tool has no limits on uploads or bandwidth. Freely upload in bulk and 
                    share all of your stories in one go.</p>
            </div>
            <div>
                <img alt='embed' src={embed} />
                <h2>Available to Embed</h2>
                <p>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, 
                    Google Maps, and more. </p>
            </div>
        </div>
    </section>
  )
}

export default BlockFour