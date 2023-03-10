import React from 'react'

const arrow = require('./../../../assets/shared/desktop/arrow.svg').default;

function BlockThree() {
  return (
    <section className='section'>
        <div className='section-content-white'>
            <h2>Beautiful stories every time</h2>
            <p>We provide design templates to ensure your stories look terrific. Easily add 
                photos, text, embed maps and media from other networks. Then share your story 
                with everyone.</p>
            <button className='btnblocktree'>View the stories <img alt='button' src={arrow} /></button>
        </div>
        <div className='Img3'>
        </div>
    </section>
  )
}

export default BlockThree