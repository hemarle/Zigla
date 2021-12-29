import React from 'react'
import './Services.css'
import img1 from './images/service-icon-1-1.svg'
import img2 from './images/service-icon-2-1.svg'
import img3 from './images/service-icon-3-1.svg'
import img4 from './images/service-icon-4-1.svg'
import img5 from './images/service-icon-4-1.svg'
function Services() {
    return (
        <div className='services'>
       <h4> Awesome services</h4>     
        <h2>Why you need Zigla</h2>
        <div className="services__Cards">
         <div className="services__Card">
             <img src={img1} alt="" />
             <p>Loan</p>
         </div>
         <div className="services__Card">
             <img src={img2} alt="" />
             <p>Crypoland App</p>
         </div>
         <div className="services__Card">
             <img src={img4} alt="" />
             <p>Loan</p>
         </div>
         <div className="services__Card">
             <img src={img3} alt="" />
             <p>Blockchain</p>
         </div>
         <div className="services__Card">
             <img src={img4} alt="" />
             <p>Exchange</p>
         </div>
        </div>
        </div>
    )
}

export default Services
