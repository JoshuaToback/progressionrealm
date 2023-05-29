import React from "react";
import { Container } from "react-bootstrap";
import Hero from "../components/Hero";
import Standings from "../components/Standings";

function Home() {


  return (
    <Container className="home">
      <Hero />
      <aside id="standings">
        <Standings />
      </aside>

      <div className="homeContent">
        <h2>The Progression Realm</h2>

        <h3>Pharaoh's Servant</h3>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/hkI4LBrWWco"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </Container>
  );
}

export default Home;
