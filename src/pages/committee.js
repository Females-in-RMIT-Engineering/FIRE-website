/* eslint-disable */ 

import React from 'react';
import { Helmet } from "react-helmet";
import "./pagesCSS/committee.css";
import CommitteeCard from './pagesResources/CommitteeCards';
  
const Committee = () => {
  return (
    <div>
      <Helmet>
            <title>FIRE+ | Committee</title>
      </Helmet>

      <div class ='committeeContent'>
        <br />
        <h1>Meet the FIRE+ Committee</h1>

        

        <h2><span class = 'Fontcolor'>Executive</span> Team </h2>

        <div class = 'CommitteeRow'>
          <div class = 'CommitteeColumn'>
            <CommitteeCard name = "Felicity Monk" role="President"/>
          </div>
          <div class = 'CommitteeColumn'>
            <CommitteeCard name = "Akshita Agrawal" role="Vice President"/>
          </div>
          <div class = 'CommitteeColumn'>
            <CommitteeCard name = "Khanak Sharma"  role="Operation Manager"/>
          </div>
          <div class = 'CommitteeColumn'>
            <CommitteeCard name = "Mandeep Kaur"  role="Treasurer"/>
          </div>
        </div>
        

        <h2><span class='Fontcolor'>Newsletter </span> Team </h2>

        <div class = 'CommitteeRow'>
          <div class = 'CommitteeColumn'>
            <CommitteeCard name = "Lourdes Sirianni" role="Newsletter Officer"/>
          </div>  
          <div class = 'CommitteeColumn'>
            <CommitteeCard name = "Ridma Withanage" role="Newsletter Officer"/>
          </div> 
          <div class = 'CommitteeColumn'>
            <CommitteeCard name = "Spurthy Yellutla" role="Newsletter Officer"/>
          </div>  
          <div class = 'CommitteeColumn'>
            <CommitteeCard name = "Vani Kumar" role="Newsletter Officer"/>
          </div>  
        </div>  

        <h2><span class='Fontcolor'>Industry Events </span> Team </h2>

        <div class = 'CommitteeRow'>
          <div class = 'CommitteeColumn'>
            <CommitteeCard name = "Cherie Htun" role="Industry Engagement Officer"/>
          </div> 
          <div class = 'CommitteeColumn'>
            <CommitteeCard name = "Nithya Niranjani Nagaraja" role="Industry Engagement Officer"/>
          </div> 
          <div class = 'CommitteeColumn'>
            <CommitteeCard name = "Tara Schneeweiss" role="Industry Engagement Officer"/>
          </div>  
        </div>  

        <h2><span class='Fontcolor'>Social Events </span> Team </h2>

        <div class = 'CommitteeRow'>
          <div class = 'CommitteeColumn'>
            <CommitteeCard name = "Evelyn Todio" role="Social Events Officer"/>
          </div>  
          <div class = 'CommitteeColumn'>
            <CommitteeCard name = "Sherin Shaji Thomas" role="Social Events Portfolio Member"/>
          </div>  
          <div class = 'CommitteeColumn'>
            <CommitteeCard name = "Isabelle Masagca" role="Social Events Portfolio Member"/>
          </div>  
        </div>  

        <h2><span class='Fontcolor'>Social Media </span> Team </h2>

        <div class = 'CommitteeRow'>
          <div class = 'CommitteeColumn'>
            <CommitteeCard name = "Zainab Noorullah" role="Social Media Officer"/>
          </div>  
          <div class = 'CommitteeColumn'>
            <CommitteeCard name = "Alyssa Vonier" role="Social Media Officer"/>
          </div>
          <div class = 'CommitteeColumn'>
            <CommitteeCard name = "Navya Chugh" role="Social Media Portfolio Member"/>
          </div>
          <div class = 'CommitteeColumn'>
            <CommitteeCard name = "Kent Go" role="Website Officer"/>
          </div>
        </div>  

        <br />
      </div>
    </div>
  );
};
  
export default Committee;