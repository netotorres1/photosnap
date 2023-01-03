import React from 'react'

import card from './../../../assets/stories/desktop/mountains.jpg'

import './readstorie.sass'

type Props = {}

function ReadStorie({}: Props) {
  return (
    <section className='section'>
        <div className='themountain'>
            <div>
                <h2>The Mountain</h2>
                <span>by John Appleseed</span>
                <button>Read Story</button>
            </div>
        </div>
        <div className='cityscapes'>
            <div>
                <h2>Sunset Cityscapes</h2>
                <span>by Benjamin Cruz</span>
                <button>Read Story</button>
            </div>
        </div>
        <div className='voyage'>
            <div>
                <h2>18 Days Voyage</h2>
                <span>by Alexei Borodin</span>
                <button>Read Story</button>
            </div>
        </div>
        <div className='architecturals'>
            <div>
                <h2>Architecturals</h2>
                <span>by Samantha Brooke</span>
                <button>Read Story</button>
            </div>
        </div>
    </section>
  )
}

export default ReadStorie