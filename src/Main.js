import React from 'react'
import About from './About'
import Contact from './Contact'
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
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Main
