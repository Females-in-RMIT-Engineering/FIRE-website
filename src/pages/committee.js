/* eslint-disable */

import React from 'react';
import { Helmet } from "react-helmet";
import "./pagesCSS/committee.css";
import CommitteeCard from './pagesResources/CommitteeCards';

import Felicity from "./pagesResources/images/committeephotos/Felicity.jpg";
import Bridgette from "./pagesResources/images/committeephotos/Bridgette_Operations.png";
import Nithya from "./pagesResources/images/committeephotos/Nithya_Treasurer.jpg";
import Victoria from "./pagesResources/images/committeephotos/Victoria_EventsOfficer.png";
import Alyssa from "./pagesResources/images/committeephotos/Alyssa_MediaOfficer.png";
import Stefanie from "./pagesResources/images/committeephotos/Stefanie_Newsletter.png";
import Sabah from "./pagesResources/images/committeephotos/Sabah_Newsletter.jpg";
import Hannah from "./pagesResources/images/committeephotos/Hannah_Newsletter.jpg";
import Labiba from "./pagesResources/images/committeephotos/Labiba_Newsletter.jpg";
import Chinthani from "./pagesResources/images/committeephotos/Chinthani_Events.jpg";
import Evelyn from "./pagesResources/images/committeephotos/Evelyn_Events.jpg";
import Jess from "./pagesResources/images/committeephotos/Jess_Events.png";
import Joanne from "./pagesResources/images/committeephotos/Joanne_Events.jpg";
import Keeley from "./pagesResources/images/committeephotos/Keeley_Events.jpg";
import Malcolm from "./pagesResources/images/committeephotos/Malcolm_Events.jpg";
import Ruwanya from "./pagesResources/images/committeephotos/Ruwanya_Events.png";
import Sherin from "./pagesResources/images/committeephotos/Sherin_Events.png";
import Spurthy from "./pagesResources/images/committeephotos/Spurthy_Events.jpg";
import Isabelle from "./pagesResources/images/committeephotos/Isabelle_Media.png";
import Navya from "./pagesResources/images/committeephotos/Navya_Media.jpeg";
import Akshita from "./pagesResources/images/committeephotos/Akshita_Media.jpeg";
import Kannan from "./pagesResources/images/committeephotos/Kannan_Media.png";
import Amna from "./pagesResources/images/committeephotos/Amna_Website.jpg";
import Maanvi from "./pagesResources/images/committeephotos/Maanvi_Website.jpg";
import Simone from "./pagesResources/images/committeephotos/Simone_Website.jpg";


const Committee = () => {
  return (
    <div>
      <Helmet>
        <title>FIRE+ | Committee</title>
      </Helmet>

      <div class='committeeContent'>
        <br />
        <h1>Meet the 2025 FIRE+ Committee</h1>

        <p className="paragraphSpacing">
          Say hello to the awesome people behind FIRE+ for 2025! Our Executive Team is a group of passionate,
          driven, and friendly students who are here to make this year unforgettable. From organizing events to
          creating new opportunities, they’re all about building a fun, supportive, and inclusive community.
          Get to know the faces behind the team and see what we’re all about!
        </p>

        <h2><span class='Fontcolor'>Executive</span> Team </h2>

        <div class='CommitteeRow'>
          <div class='CommitteeColumn'>
            <CommitteeCard name="Felicity Monk" role="President" photo={Felicity}/>
          </div>
          <div class='CommitteeColumn'>
            <CommitteeCard name="Bridgette Benney" role="Operations Manager & Newsletter Officer" photo={Bridgette}/>
          </div>
          <div class='CommitteeColumn'>
            <CommitteeCard name="Nithya Niranjani" role="Treasurer & Website Officer" photo={Nithya}/>
          </div>
          <div class='CommitteeColumn'>
            <CommitteeCard name="Victoria Green" role="Social Enagagement Officer" photo={Victoria}/>
          </div>
          <div class='CommitteeColumn'>
            <CommitteeCard name="Alyssa Vonier" role="Media Officer" photo={Alyssa}/>
          </div>
        </div>


        <h2><span class='Fontcolor'>Newsletter </span> Team </h2>

        <div class='CommitteeRow'>
          <div class='CommitteeColumn'>
            <CommitteeCard name="Stefanie Buttigieg" role="Newsletter General Committee" photo={Stefanie}/>
          </div>
          <div class='CommitteeColumn'>
            <CommitteeCard name="Sabah Mahjabin" role="Newsletter General Committee" photo={Sabah}/>
          </div>
          <div class='CommitteeColumn'>
            <CommitteeCard name="Hannah Morcom" role="Newsletter General Committee" photo={Hannah}/>
          </div>
          <div class='CommitteeColumn'>
            <CommitteeCard name="Labiba Nawar" role="Newsletter General Committee" photo={Labiba}/>
          </div>
        </div>

        <h2><span class='Fontcolor'>Social and Industry Events </span> Team </h2>

        <div class='CommitteeRow'>
          <div class='CommitteeColumn'>
            <CommitteeCard name="Chinthani Udage" role="Events General Committee" photo={Chinthani}/>
          </div>
          <div class='CommitteeColumn'>
            <CommitteeCard name="Evelyn Todio" role="Events General Committee" photo={Evelyn}/>
          </div>
          <div class='CommitteeColumn'>
            <CommitteeCard name="Jess Hailes-Bradley" role="Events General Committee" photo={Jess}/>
          </div>
          <div class='CommitteeColumn'>
            <CommitteeCard name="Joanne Ngo" role="Events General Committee" photo={Joanne}/>
          </div>
          <div class='CommitteeColumn'>
            <CommitteeCard name="Keeley McGregor" role="Events General Committee" photo={Keeley}/>
          </div>
          <div class='CommitteeColumn'>
            <CommitteeCard name="Malcolm Gonsalves" role="Events General Committee" photo={Malcolm}/>
          </div>
          <div class='CommitteeColumn'>
            <CommitteeCard name="Ruwanya Wijewardene" role="Events General Committee" photo={Ruwanya}/>
          </div>
          <div class='CommitteeColumn'>
            <CommitteeCard name="Sherin Shaji Thomas" role="Events General Committee" photo={Sherin}/>
          </div>
          <div class='CommitteeColumn'>
            <CommitteeCard name="Spurthy Naidu" role="Events General Committee" photo={Spurthy}/>
          </div>
        </div>

        <h2><span class='Fontcolor'>Media </span> Team </h2>

        <div class='CommitteeRow'>
          <div class='CommitteeColumn'>
            <CommitteeCard name="Isabelle Masagca" role="Media General Committee" photo={Isabelle}/>
          </div>
          <div class='CommitteeColumn'>
            <CommitteeCard name="Navya Chugh" role="Media General Committee" photo={Navya}/>
          </div>
          <div class='CommitteeColumn'>
            <CommitteeCard name="Akshita Agrawal" role="Media General Committee" photo={Akshita}/>
          </div>
          <div class='CommitteeColumn'>
            <CommitteeCard name="Kannan Arora" role="Media General Committee" photo={Kannan}/>
          </div>
        </div>

        <h2><span class='Fontcolor'>Website </span> Team </h2>

        <div class='CommitteeRow'>
          <div class='CommitteeColumn'>
            <CommitteeCard name="Amna Tahir" role="Website General Committee" photo={Amna}/>
          </div>
          <div class='CommitteeColumn'>
            <CommitteeCard name="Maanvi Aggarwal" role="Website General Committee" photo={Maanvi}/>
          </div>
          <div class='CommitteeColumn'>
            <CommitteeCard name="Sherin Shaji Thomas" role="Website General Committee" photo={Sherin}/>
          </div>
          <div class='CommitteeColumn'>
            <CommitteeCard name="Simone Gupta" role="Website General Committee" photo={Simone}/>
          </div>
        </div>

        <br />
      </div>
    </div>
  );
};

export default Committee;