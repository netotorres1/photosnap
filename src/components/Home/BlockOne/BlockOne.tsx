import './blockone.sass'

const arrow = require('./../../../assets/shared/desktop/arrow-white.svg').default;

function BlockOne() {
  return (
    <section className='section'>
        <div className='section-content'>
            <h2>Create and share your photo Stories</h2>
            <p>Photosnap is a platform for photographers and visual storytellers. We make it 
                easy to share photos, tell stories and connect with others.</p>
            <button>Get an invite <img alt='button' src={arrow} /></button>
        </div>
        <div className='Img'>
        </div>
    </section>
  )
}

export default BlockOne