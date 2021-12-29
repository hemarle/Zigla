import React from 'react'
import './Home.css'
import illustration from './images/promo-bg.png'
function Home() {
    return (
        <div className='home'>
            <div className='home__Image'>
                <img src={illustration} alt='home illustration' />
            </div>
            <div className='home__Content'>
                <h2 className='home__Title'>
                Zigla Just Entered the    <span> Real World</span>
                </h2>
                <p className='home__About'>
                Zigla Token is BEP20 token deployed on Binance Smart Chain with 200 million supplies. 
                 </p>
                 <div className="home__Links">

                <a className='home__Link' href='/login'> Buy Tokens</a>
                <a className='home__Link' href='/whitepaper'> WhitePapers</a>
                 </div>
            </div>
        </div>
    )
}

export default Home
