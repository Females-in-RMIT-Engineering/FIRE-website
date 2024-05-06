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
                {/* pwc Australia description adapted from https://www.pwc.com.au/about-us.html */}
                <p>At PwC Australia, we take a human-led, tech-powered approach, combining diverse perspectives, expertise and relationships with the right technology to solve problems and unlock opportunities.</p>
              </div>
            </div>

          <h2> Silver </h2>
            <div class = 'SponsorRowGrid'>
              <div class = 'SponsorColumn'>
                <img src={ARCADISLogo} alt = 'ARCADIS Logo' width = {270} class = 'SponsorLogos' />
                {/* Arcadis description adapted from https://www.arcadis.com/en-au/about-us/company-profile */}
                <p>Arcadis is the world’s leading company delivering intelligence-driven sustainable design, engineering, and consultancy solutions for natural and built assets.</p>
              </div>
              <div class = 'SponsorColumn'>
                <img src={JacobsLogo} alt = 'Jacobs Logo' width = {270} class = 'SponsorLogos' />
                {/* Jacobs description adapted from https://www.jacobs.com/about */}
                <p>At Jacobs, we make the world smarter, more connected and more sustainable. Across our company, across our offices, across the world, we’re continually challenging today to reinvent tomorrow.</p>
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