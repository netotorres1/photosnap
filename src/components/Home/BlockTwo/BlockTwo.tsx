import React from 'react'

import './blocktwo.sass'

const arrow = require('./../../../assets/shared/desktop/arrow.svg').default;

function BlockTwo() {
  return (
    <section className='section2'>
        <div className='Img2'>
        </div>
        <div className='section-content-white'>
            <h2>Beautiful stories every time</h2>
            <p>We provide design templates to ensure your stories look terrific. Easily add 
                photos, text, embed maps and media from other networks. Then share your story 
                with everyone.</p>
            <button>View the stories <img alt='button' src={arrow} /></button>
        </div>
    </section>
  )
}

export default BlockTwo