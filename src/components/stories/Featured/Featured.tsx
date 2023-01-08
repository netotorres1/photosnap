import './featured.sass'

const arrow = require('./../../../assets/shared/desktop/arrow-white.svg').default;

function Featured() {
  return (
    <section className='featured'>
        <div className='container-featured-content'>
            <div>
                <p className='uppercase'>Last month's featured story</p>
                <h2>Hazy full moon of Appalachia</h2>
                <p>March 2nd 2020 <span>by John Appleseed</span></p>
                <p>
                    The dissected plateau area, while not actually made up of geological mountains, 
                    is popularly called "mountains," especially in eastern Kentucky and West Virginia, 
                    and while the ridges are not high, the terrain is extremely rugged.
                </p>
                <button>Read the story<img alt='button' src={arrow} /></button>
            </div>
        </div>
    </section>
  )
}

export default Featured