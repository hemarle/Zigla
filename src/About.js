import React from "react";
import "./About.css";

import ziglaIcon from './images/zigla.png'
function About() {
  return (
    <div className="about">
      <div className="about__Card">
            <div className="about__CardHeader">
            <hr />
            <h4>DECENTRALISED ECONOMY </h4>
            </div>
            <h2>
            About Zigla Token
            </h2>
            <p>
            ZIGLA is a decentralized and trustless lending protocol developed
            onthe binance smart chain, with smart contracts and governed by Zigla
            token (ZIGL), it provides a fast,safe and transparent set of tools for
            anyone to lend and borrow fiat currencies. 
            </p>
            <p>Zigla lends fiat currencies
            provided by lenders to borrowers that collaterize cryptocurrency in a
            Zigla smart contract. The lender receives a high interest rate from
            secured investment whilst the borrowers can maintain their crypto
            positions and see them grow. ZIGLA stakes the collateral in community
            managed vaults (LPs) generating yield with 35% going to ZIGL stackers
            and 75% to various other function such as products, treasury
            development and operations.
            </p>

            <div className="about__Icon">
<img src={ziglaIcon} alt='zigla'/>
            </div>
      </div>
    </div>
  );
}

export default About;
