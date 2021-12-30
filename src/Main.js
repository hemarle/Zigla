import React from 'react'
import './Main.css'
import About from './About'
import Contact from './Contact'
import Distribution from './Distribution'
import Footer from './Footer'
import Home from './Home'
import Navigation from './Navigation'
import Offers from './Offers'
import Services from './Services'
import TokenSale from './TokenSale'


function Main() {
    return (
        <div className='main'>
            <Navigation/>
            <Home/>
            <About/>
            <Services/>
            <Offers/>
            <TokenSale/>
            {/* <Distribution/> */}
            <Contact/>
            <Footer/>

        </div>
    )
}

export default Main
