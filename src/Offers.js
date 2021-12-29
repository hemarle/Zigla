import React, { useState } from "react";
import "./Offers.css";
import img1 from "./images/service-icon-1-1.svg";
import img2 from "./images/service-icon-2-1.svg";
import img3 from "./images/service-icon-3-1.svg";
import img4 from "./images/service-icon-4-1.svg";

function Offers() {
  const [offers, setOffers] = useState([
    {
      title: "Zigla Mobile App",
      about:
        "Zigla provides a secure mobile wallet app for storing your Zigla Token, BNB, BUSD and USDT",
      image: img1,
    },
    {
      title: "Zigla Mobile App",
      about:
        "Zigla provides a secure mobile wallet app for storing your Zigla Token, BNB, BUSD and USDT",
      image: img1,
    },
    {
      title: "Zigla Mobile App",
      about:
        "Zigla provides a secure mobile wallet app for storing your Zigla Token, BNB, BUSD and USDT",
      image: img1,
    },
    {
      title: "Zigla Mobile App",
      about:
        "Zigla provides a secure mobile wallet app for storing your Zigla Token, BNB, BUSD and USDT",
      image: img1,
    },
    {
      title: "Zigla Mobile App",
      about:
        "Zigla provides a secure mobile wallet app for storing your Zigla Token, BNB, BUSD and USDT",
      image: img1,
    },
  ]);
  return (
    <div className="offers">
      <h2> Services</h2>
      <div className="offers__Cards">
        {offers.map((offer) => (
          <>
            <div className="offers__Card">
              <div className="offers__CardImage">
                <img src={offer.image} alt="" />
              </div>
              <div className="offers__CardContent">
                <h3>{offer.title}</h3>
                <p>{offer.about}</p>
              </div>
            </div>
          </>
        ))}
      </div>

      <a href='/login'> JOIN ICO</a>
    </div>
  );
}

export default Offers;
