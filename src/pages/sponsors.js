/* eslint-disable */ 

import React from 'react';
import { Helmet } from "react-helmet";
import "./pagesCSS/sponsors.css";
import "@fontsource/varela-round/400.css";

import lendleaseLogo from './pagesResources/logos/lendleaseLogo.png';
import pwcLogo from './pagesResources/logos/pwcLogo.png';
import ARCADISLogo from './pagesResources/logos/ARCADISLogo.png';
import JacobsLogo from './pagesResources/logos/JacobsLogo.png';
import AEMOLogo from './pagesResources/logos/AEMOLogo.png';
import EYLogo from './pagesResources/logos/EYLogo.svg';
import VANGUARDLogo from './pagesResources/logos/VANGUARDLogo.png';
import SPIIRELogo from './pagesResources/logos/SPIIRELogo.png';

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

          <div class="sponsors">
            <div class="platinum-sponsors">
              <div class="title"> Platinum </div>
              <div class = 'SponsorRow'>
                <div class = 'SponsorColumn'>
                  {/* <img src={lendleaseLogo} alt = 'lendlease Logo' height = {190} class = 'SponsorLogos'/>
                  lendlease description adapted from https://www.lendlease.com/au/about-us/
                  <p>As a global, integrated real estate group, we draw on decades of experience and the latest thinking in investments, development, construction, design and placemaking to deliver iconic and enormously successful places.</p> */}
                  -
                </div>
              </div>
            </div>

            {/* pwc, lendlease, aemo */}
            <div class="gold-sponsors">
              <div class="title"> Gold </div>
              <div class = 'SponsorRowGrid'>
                <div class = 'SponsorColumn'>
                  <div class="sponsor-image-container">
                    <img src={pwcLogo} alt = 'pwc Logo' width = {200} class = 'SponsorLogos' />
                  </div>
                  {/* pwc Australia description adapted from https://www.pwc.com.au/about-us.html */}

                  <div class="sponsor-description">
                    At PwC Australia, we take a human-led, tech-powered approach, combining diverse perspectives, expertise and relationships with the right technology to solve problems and unlock opportunities.
                  </div>
                </div>

                <div class = 'SponsorColumn'>
                  <div class="sponsor-image-container">
                    <img src={lendleaseLogo} alt = 'lendlease Logo' height = {190} class = 'SponsorLogos'/>
                  </div>
                  {/* lendlease description adapted from https://www.lendlease.com/au/about-us/ */}
                  <div class="sponsor-description">
                    As a global, integrated real estate group, we draw on decades of experience and the latest thinking in investments, development, construction, design and placemaking to deliver iconic and enormously successful places.
                  </div>
                </div>

                {/* <div class = 'SponsorColumn'>
                  <div class="sponsor-image-container">
                    <img src={JacobsLogo} alt = 'Jacobs Logo' width = {270} class = 'SponsorLogos' />
                  </div>
                  Jacobs description adapted from https://www.jacobs.com/about
                  <div class="sponsor-description">
                    At Jacobs, we make the world smarter, more connected and more sustainable. Across our company, across our offices, across the world, we’re continually challenging today to reinvent tomorrow.
                  </div>
                </div> */}

                <div class = 'SponsorColumn'>
                  <div class="sponsor-image-container">
                    <img src={AEMOLogo} alt = 'AEMO Logo' width = {270} class = 'SponsorLogos' />
                  </div>
                  {/* AEMO description adapted from https://aemo.com.au/about/who-we-are */}
                  <div class="sponsor-description">
                    As the Australian Energy Market Operator (AEMO), we’re shaping a better energy future for all Australians. Our role is to manage the electricity and gas systems and markets across Australia, helping to ensure Australians have access to affordable, secure and reliable energy.
                  </div>
                </div>
              </div>
            </div>
            
            {/* EY, Vanguard, Arcadis, Spiire */}
            <div class="silver-sponsors">
              <div class="title"> Silver </div>
              <div class = 'SponsorRowGrid'>
                <div class = 'SponsorColumn'>
                  <div class="sponsor-image-container">
                    <img src={EYLogo} alt = 'EY Logo' width = {270} class = 'SponsorLogos' />
                  </div>
                  {/* EY description adapted from https://www.ey.com/en_au/about-us */}
                  <div class="sponsor-description">
                    At EY, our purpose is Building a better working world. The insights and quality services we provide help build trust and confidence in the capital markets and in economies the world over.
                  </div>
                </div>

                <div class = 'SponsorColumn'>
                  <div class="sponsor-image-container">
                    <img src={VANGUARDLogo} alt = 'Vanguard Logo' width = {270} class = 'SponsorLogos' />
                  </div>
                  {/* Vanguard description adapted from https://www.vanguard.com.au/corporate/ */}
                  <div class="sponsor-description">
                    Vanguard is one of the world's largest investment management companies, offering low-cost investment options and superannuation to everyday Australians.
                  </div>
                </div>

                <div class = 'SponsorColumn'>
                  <div class="sponsor-image-container">
                    <img src={ARCADISLogo} alt = 'ARCADIS Logo' width = {270} class = 'SponsorLogos' />
                  </div>
                  {/* Arcadis description adapted from https://www.arcadis.com/en-au/about-us/company-profile */}
                  <div class="sponsor-description">
                    Arcadis is the world’s leading company delivering intelligence-driven sustainable design, engineering, and consultancy solutions for natural and built assets.
                  </div>
                </div>

                <div class = 'SponsorColumn'>
                  <div class="sponsor-image-container">
                    <img src={SPIIRELogo} alt = 'Spiire Logo' width = {270} class = 'SponsorLogos' />
                  </div>
                  {/* Spiire description adapted from https://www.spiire.com.au/about-spiire/ */}
                  <div class="sponsor-description">
                    We are an integrated team of passionate civil engineers, landscape architects, construction consultants, surveyors, town planners, urban designers, water engineers and visual media artists providing specialist services to the property and infrastructure sectors.
                  </div>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>  
      </div>
    );
  };

  export default Sponsors;

  /* <div class="middle">
      <div class="text">John Doe</div>
    </div> */