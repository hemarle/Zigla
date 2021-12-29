import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className='footer'>
            <div className="footer__Left">
                <img src="" alt="" />
                <p> 2021, Zigla</p>
            </div>
            <div className="footer__Center">
                <h3>Stay Connected</h3>
                <div className="footer__Social">
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>

            </div>
            <div className="footer__Right">
                <h3>Subscribe</h3>
                <div className="footer__Send">
                    <input type="email" name="footEmail" id="footEmail" />
                    <input type="submit" value="Send" />
                </div>
            </div>
        </div>
    )
}

export default Footer
