import React from 'react';

import Home from "./pages/Home.js";
import Duelists from "./pages/Duelists.js";
import Stats from "./pages/Stats.js";
import Videos from "./pages/Videos.js";

import './styles/App.css';

import Header from "./components/Header.js"
import Footer from "./components/Footer.js"

import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>

    <Container fluid>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Videos' element={<Videos />}></Route>
        <Route path='/Stats' element={<Stats />}></Route>
        <Route path='/Duelists' element={<Duelists />}></Route>
      </Routes>
      <Footer />
    </Container>
    </>
  );
}

export default App;
