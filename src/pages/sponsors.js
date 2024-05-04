/* eslint-disable */ 

import React from 'react';
import { Helmet } from "react-helmet";
import "./pagesCSS/sponsors.css";

import lendleaseLogo from './pagesResources/logos/lendleaseLogo.png';
import pwcLogo from './pagesResources/logos/pwcLogo.png';
import ARCADISLogo from './pagesResources/logos/ARCADISLogo.png';
import JacobsLogo from './pagesResources/logos/JacobsLogo.png';

const Sponsors = () => {
    return (
      <div>
        <Helmet>
            <title>FIRE+ | Sponsors</title>
        </Helmet>

        <div class = 'sponsorsContent'>
          <br />

          <h1 style={{ marginBottom: "-10px" }}>Our Sponsors</h1>

          <p class = 'sponsorsheading'>
            FIRE+ is kindly sponsored by the following corporations
          </p>

          <h2> Platinum </h2>
            <div class = 'SponsorRow'>
              <div class = 'SponsorColumn'>
                <img src={lendleaseLogo} alt = 'lendlease Logo' height = {190} class = 'SponsorLogos'/>
                {/* lendlease description adapted from https://www.lendlease.com/au/about-us/ */}
                <p>As a global, integrated real estate group, we draw on decades of experience and the latest thinking in investments, development, construction, design and placemaking to deliver iconic and enormously successful places.</p>
              </div>
            </div>

          <h2> Gold </h2>
            <div class = 'SponsorRow'>
              <div class = 'SponsorColumn'>
                <img src={pwcLogo} alt = 'pwc Logo' width = {200} class = 'SponsorLogos' />
              </div>
            </div>

          <h2> Silver </h2>
            <div class = 'SponsorRowGrid'>
              <div class = 'SponsorColumn'>
                <img src={ARCADISLogo} alt = 'ARCADIS Logo' width = {270} class = 'SponsorLogos' />
              </div>
              <div class = 'SponsorColumn'>
                <img src={JacobsLogo} alt = 'Jacobs Logo' width = {270} class = 'SponsorLogos' />
              </div>
            </div>

          <br />
        </div>
        
      </div>
    );
  };

  export default Sponsors;

  /* <div class="middle">
      <div class="text">John Doe</div>
    </div> */