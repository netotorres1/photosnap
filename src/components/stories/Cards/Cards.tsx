import './cards.sass'

const arrow = require('./../../../assets/shared/desktop/arrow-white.svg').default;

function Cards() {
  return (
    <main>
        <div className='themountain'>
            <div >
                <span>April 16th 2020</span>
                <h2>The Mountains</h2>
                <span>by John Appleseed</span>
                <button>Read Story<img alt='button' src={arrow} /></button>
            </div>
        </div>
        <div className='benjamincruz'>
            <div>
            <span>April 14th 2020</span>
                <h2>Sunset Cityscapes</h2>
                <span>by Benjamin Cruz</span>
                <button>Read Story<img alt='button' src={arrow} /></button>
            </div>
        </div>
        <div className='alexei'>
            <div>
            <span>April 11th 2020</span>
                <h2>18 Days Voyage</h2>
                <span>by Alexei Borodin</span>
                <button>Read Story<img alt='button' src={arrow} /></button>
            </div>
        </div>
        <div className='architecturals'>
            <div>
            <span>April 9th 2020</span>
                <h2>Architecturals</h2>
                <span>by Samantha Brooke</span>
                <button>Read Story<img alt='button' src={arrow} /></button>
            </div>
        </div>
        <div className='timothy'>
            <div>
            <span>April 7th 2020</span>
                <h2>World Tour 2019</h2>
                <span>by Timothy Wagner</span>
                <button>Read Story<img alt='button' src={arrow} /></button>
            </div>
        </div>
        <div className='willian'>
            <div>
                <span>April 3rd 2020</span>
                <h2>Unforeseen Corners</h2>
                <span>by William Malcolm</span>
                <button>Read Story<img alt='button' src={arrow} /></button>
            </div>
        </div>
        <div className='tim'>
            <div>
            <span>March 29th 2020</span>
                <h2>King on Africa: Part II</h2>
                <span>by Tim Hillenburg</span>
                <button>Read Story<img alt='button' src={arrow} /></button>
            </div>
        </div>
        <div className='felicua'>
            <div>
            <p>March 21st 2020</p>
                <h2>The Trip to Nowhere</h2>
                <span>by Felicia Rourke</span>
                <button>Read Story<img alt='button' src={arrow} /></button>
            </div>
        </div>
        <div className='mohammed'>
            <div>
            <span>March 19th 2020</span>
                <h2>Rage of The Sea</h2>
                <span>by Mohammed Abdul</span>
                <button>Read Story<img alt='button' src={arrow} /></button>
            </div>
        </div>
        <div className='running-free'>
            <div>
            <span>March 16th 2020</span>
                <h2>Running Free</h2>
                <span>by Michelle</span>
                <button>Read Story<img alt='button' src={arrow} /></button>
            </div>
        </div>
        <div className='lammar'>
            <div>
            <span>March 11th 2020</span>
                <h2>Behind the Waves</h2>
                <span>by Lamarr Wilson</span>
                <button>Read Story<img alt='button' src={arrow} /></button>
            </div>
        </div>
        <div className='samantha'>
            <div>
            <span>March 9th 2020</span>
                <h2>Calm Waters</h2>
                <span>by Samantha Brooke</span>
                <button>Read Story<img alt='button' src={arrow} /></button>
            </div>
        </div>
        <div className='benjamin'>
            <div>
            <span>March 5th 2020</span>
                <h2>The Milky Way</h2>
                <span>by Benjamin Cruz</span>
                <button>Read Story<img alt='button' src={arrow} /></button>
            </div>
        </div>
        <div className='mohamed'>
            <div>
            <span>March 4th 2020</span>
                <h2>Night at The Dark Forest</h2>
                <span>by  Mohammed Abdul</span>
                <button>Read Story<img alt='button' src={arrow} /></button>
            </div>
        </div>
        <div className='michelle'>
            <div>
            <span>March 1st 2020</span>
                <h2>Somwarpet’s Beauty</h2>
                <span>by Michelle</span>
                <button>Read Story<img alt='button' src={arrow} /></button>
            </div>
        </div>
        <div className='william'>
            <div>
            <span>February 25th 2020</span>
                <h2>Land of Dreams</h2>
                <span>by William Malcolm</span>
                <button>Read Story<img alt='button' src={arrow} /></button>
            </div>
        </div>
    </main>
  )
}

export default Cards