import React from "react";
import "./TokenSale.css";
function TokenSale() {
  return (
    <div className="tokensale">
      <div className="tokensale__Image">
        <img src="" alt="" />
      </div>
      <div className="tokensale__Content">
        <h4>
          <span>
            <hr />
          </span>{" "}
          About Token
        </h4>

        <h2> Token Sale</h2>
        <div className="tokensale__Options">
          <div className="tokensale__Option">
            <p>Token name:</p>
            <p>Zigla Token</p>
          </div>
          <div className="tokensale__Option">
            <p>
              Ticker Symbol:  
           
            </p>
            <p>Zigla Token</p>
          </div>
          <div className="tokensale__Option">
            <p>Currency Symbol</p>
            <p>Zigla Token</p>
          </div>
          <div className="tokensale__Option">
            <p>Image:</p>
            <p>Zigla Token</p>
          </div>
          <div className="tokensale__Option">
            <p>Starting Price Pre-Sale:</p>
            <p>Zigla Token</p>
          </div>
          <div className="tokensale__Option">
            <p>  Starting trading price:</p>
            <p>Zigla Token</p>
          </div>
          <div className="tokensale__Option">
            <p>Fundraising Goal:</p>
            <p>Zigla Token</p>
          </div>
        </div>

        <h3>General Description</h3>
        <p className="tokensale__Description">
          ZIGLA is building a DeFi banking protocol; unlocking the value of your
          crypto assets in fiat while keeping a long position and not triggering
          a tax event. {"\b"}ZIGLA is an open-source, non-custodial liquidity
          protocol for borrowing fiat (USD and EUR) against crypto collateral
          and earning yield on deposits. The ZIGLA token is used for governance
          of the protocol, and you can stake it to earn yield. ZIGLA is the
          first decentralized protocol built on Binance smart chain that
          incorporates fiat loan capabilities into the crypto ecosystem. This
          enables low friction transactions between crypto and fiat positions
          while maintaining control of digital assets. Users will interact with
          the ZIGLAapp on iOS, Android and in the browser to easily access their
          digital assets to lend, borrow and manage the services offered by
          ZIGLA. Users have peace of mind because they keep the keys to their
          assets at all times. ZIGLA offers significant capital efficiency gains
          in lending and borrowing compared to both centralized blockchain
          solutions and traditional fintech. Running on a third generation
          blockchain, ZIGLA inherits Binance’s features including low
          transaction costs, high throughput and Binance has more than $50
          billion in stacked security staked within the blockchain.
        </p>
        <a href="/login" className="button">
          {" "}
          Buy Token
        </a>
      </div>
    </div>
  );
}

export default TokenSale;
