import {useState} from 'react'
import './compare.sass'

const checking = require('./../../../assets/pricing/desktop/check.svg').default;

function Compare() {

    const [checked, setChecked] = useState(false)

    const handleChangePrices = () => {
        setChecked(!checked)
        console.log(checked)
    }
    
  return (
    <section className='container-compare'>
        <div className='container-content'>
            <div className='btnPrice'>   
                <span>Montlys</span><input checked={checked} onChange={handleChangePrices} type='checkbox'/><span>Yearly</span>
            </div>
            <div className='container-content-prices'>
                <div>
                    <h2 className='titlebasic'>Basic</h2>
                    <p className='pbasic'>Includes basic usage of our platform. Recommended for new and aspiring photographers.</p>
                    <h3>{checked === false ?'$19.00' : '$190.00'}</h3>
                    <span className='price'>{checked === false ?'per month' : 'per year'}</span>
                    <button className='btnprice'>Pick plan</button>
                </div>
                <div className='pro'>
                    <h2 className='titlepro'>Pro</h2>
                    <p className='ppro'>More advanced features available. Recommended for photography veterans and professionals.</p>
                    <h3>{checked === false ?'$39.00' : '$390.00'}</h3>
                    <span className='price'>{checked === false ?'per month' : 'per year'}</span>
                    <button className='btnprice'>Pick plan</button>
                </div>
                <div>
                    <h2 className='titlebusines'>Business</h2>
                    <p className='pbusiness'>Additional features available such as more detailed metrics. Recommended for business owners.</p>
                    <h3>{checked === false ?'$99.00' : '$990.00'}</h3>
                    <span className='price'>{checked === false ?'per month' : 'per year'}</span>
                    <button className='btnprice'>Pick plan</button>
                </div>
            </div>
                <h2>Compare</h2>
            <table>
                
                <tr>
                    <th>The features</th>
                    <th>Basic</th>
                    <th>Pro</th>
                    <th>Business</th>
                </tr>
                <tr>
                    <td>Unlimited story posting</td>
                    <td><img alt='checked' src={checking}/></td>
                    <td><img alt='checked' src={checking}/></td>
                    <td><img alt='checked' src={checking}/></td>
                </tr>
                <tr>
                    <td>Unlimited photo upload</td>
                    <td><img alt='checked' src={checking}/></td>
                    <td><img alt='checked' src={checking}/></td>
                    <td><img alt='checked' src={checking}/></td>
                </tr>
                <tr>
                    <td>Embedding custom content</td>
                    <td></td>
                    <td><img alt='checked' src={checking}/></td>
                    <td><img alt='checked' src={checking}/></td>
                </tr>
                <tr>
                    <td>Customize metadata</td>
                    <td></td>
                    <td><img alt='checked' src={checking}/></td>
                    <td><img alt='checked' src={checking}/></td>
                </tr>
                <tr>
                    <td>Advanced metrics</td>
                    <td></td>
                    <td></td>
                    <td><img alt='checked' src={checking}/></td>
                </tr>
                <tr>
                    <td>Photo downloads</td>
                    <td></td>
                    <td></td>
                    <td><img alt='checked' src={checking}/></td>
                </tr>
                <tr>
                    <td>Search engine indexing</td>
                    <td></td>
                    <td></td>
                    <td><img alt='checked' src={checking}/></td>
                </tr>
                <tr>
                    <td>Custom Analytics</td>
                    <td></td>
                    <td></td>
                    <td><img alt='checked' src={checking}/></td>
                </tr>
            </table>
        </div>
    </section>
  )
}

export default Compare