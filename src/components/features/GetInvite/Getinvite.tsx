import React from 'react'

import './getinvite.sass'

const arrow = require('./../../../assets/shared/desktop/arrow-white.svg').default;

function Getinvite() {
  return (
    <section className='container-section-getinvite'>
        <div>
            <h2>We're in beta. Get Your Invite Today!</h2>
            <button>Get an invite<img alt='button' src={arrow} /></button>
        </div>
    </section>
  )
}

export default Getinvite