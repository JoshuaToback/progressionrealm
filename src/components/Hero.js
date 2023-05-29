import React from "react";

import ProgRealmLogo from "../images/TheProgressionRealmLogo.png";

function Hero() {
  return (
    <div className="hero">
      <img
        src={ProgRealmLogo}
        id="progLogoHero"
        alt="Progression Realm Logo"
      ></img>
      <h2 className="hero-head">The Offical Site of The Progression Realm!</h2>
    </div>
  );
}

export default Hero;
