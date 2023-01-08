import React from 'react'

import './functions.sass'

const Boost = require('./../../../assets/features/desktop/boost-exposure.svg').default;
const CustomDomain = require('./../../../assets/features/desktop/custom-domain.svg').default;
const DragDrop = require('./../../../assets/features/desktop/drag-drop.svg').default;
const embed = require('./../../../assets/features/desktop/embed.svg').default;
const NoLimit = require('./../../../assets/features/desktop/no-limit.svg').default;
const Responsive = require('./../../../assets/features/desktop/responsive.svg').default;

function Functions() {
  return (
    <section className='main-content-functions'>
        <div className='content-functions-container'>
            <div>
                <img src={Responsive} />
                <h2>100% Responsive</h2>
                <p>No matter which the device you’re on, our site is fully responsive and stories 
                    look beautiful on any screen.</p>
            </div>
            <div>
                <img src={NoLimit} />
                <h2>No Photo Upload Limit</h2>
                <p>Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share 
                    all of your stories in one go.</p>
            </div>
            <div>
                <img src={embed} />
                <h2>Available to Embed</h2>
                <p>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google 
                    Maps, and more. </p>
            </div>
            <div>
                <img src={CustomDomain} />
                <h2>Custom Domain</h2>
                <p>With Photosnap subscriptions you can host your stories on your own domain. You can 
                    also remove our branding!</p>
            </div>
            <div>
                <img src={Boost} />
                <h2>Boost Your Exposure</h2>
                <p>Users that viewed your story or gallery can easily get notifed of new and featured 
                    stories with our built in mailing list.</p>
            </div>
            <div>
                <img src={DragDrop} />
                <h2>Drag & Drop Image</h2>
                <p>Easily drag and drop your image and get beautiful shots everytime. No over the top 
                tooling to add friction to creating stories.</p>
            </div>
        </div>
    </section>
  )
}

export default Functions