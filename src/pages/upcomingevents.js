/* eslint-disable */ 

import React from 'react';
import { Helmet } from "react-helmet";
import "./pagesCSS/upcomingEvents.css";

import ScavengerHuntBanner from './pagesResources/images/EventBanners/ScavengerHunt.png';
import EngineeringBallBanner from './pagesResources/images/EventBanners/EngineeringBall.jpg';
import EngineeringBallCardBanner from './pagesResources/images/EventBanners/EngineeringBallCard.jpg';
import NetworkingNightBanner from './pagesResources/images/EventBanners/NetworkingNight.jpg';
import SynchrotronTourBanner from './pagesResources/images/EventBanners/SynchrotronTour.jpg';

import EventCards from './pagesResources/EventCards';

const Events = () => {


    return (
    
        <div>

            <Helmet>
                    <title>FIRE+ | Upcoming Events</title>
            </Helmet>

            <div class = 'eventsContent'>
                <br />
                <h1>Upcoming Events</h1>
                <br />
                
                <div class = 'eventCards'>

                    <div class = 'eventsRow'>

                        <div class = 'eventsColumn'>
                            <EventCards 
                                cardImage = {ScavengerHuntBanner}
                                cardImageTitle = "Scavenger Hunt"
                                cardContentTitle = "Scavenger Hunt"
                                cardContentDesc = "To celebrate a start of a new semester, FIRE+ will be hosting our own Scavenger Hunt!"
                                DialogTitle = "FIRE+ Scavenger Hunt"
                                DialogImage = {ScavengerHuntBanner}
                                DialogDesc = "To celebrate a start of a new semester, FIRE+ will be hosting our own Scavenger Hunt! Starting with a Live Bingo session and concluding with a race for the FIRE+ code-word, we've got all aspects of a fun evening covered. Food and Soft Drinks are provided, and prizes are on offer!"
                                DialogDate = "4 August 2022"
                                DialogTime = "4:30 pm - 8:00 pm"
                                VenueLink = "https://www.google.com/maps/place/Garden+Building+RMIT+University/@-37.8080571,144.9641693,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad6439030e6c711:0x9e8c8a7cc366da0e!8m2!3d-37.8080571!4d144.9641693!16s%2Fg%2F11snq0wn3h?authuser=0&hl=en"
                                DialogVenue = "RMIT Garden Building"
                                TicketLink = "https://events.humanitix.com/the-fire-scavenger-hunt?fbclid=IwAR0KiDr77qSNrOFCWp8rk0_HcP2zJjI5231BU6MS0Mh6KBSfJE6f37wWCWM"
                                FacebookLink = "https://www.facebook.com/events/402814838430278?ref=newsfeed"
                            />
                        </div>

                        <div class = 'eventsColumn'>
                            <EventCards 
                                cardImage = {SynchrotronTourBanner}
                                cardImageTitle = "Synchrotron Tour"
                                cardContentTitle = "Synchrotron Tour"
                                cardContentDesc = "Take a sneak peek into a day in the life of an engineer/researcher at Synchrotron over some light snacks."
                                DialogTitle = "Australian Synchrotron Tour"
                                DialogImage = {SynchrotronTourBanner}
                                DialogDesc = "The Australian Synchrotron is a major research facility that specialises in beam technology. Join us in an all-inclusive tour to experience the facility up close! Take a sneak peek into a day in the life of an engineer/researcher at Synchrotron over some light snacks and Q&A."
                                DialogDate = "11 August 2022"
                                DialogTime = "10:00 am - 3:00 pm"
                                VenueLink = "https://www.google.com/maps/place/Building+56,+115+Queensberry+St,+Carlton+VIC+3053/@-37.8051266,144.9633401,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad642cdeabcedc9:0xebbe1eb29498b36c!8m2!3d-37.8051266!4d144.9655288"
                                DialogVenue = "115 Queensberry street"
                                TicketLink = "https://events.humanitix.com/australian-synchrotron-tour?fbclid=IwAR1AMO027N96ulxja-LASZtghpCzadDGWlOEF6_n_J3NunYCOfgz2AC_FwI"
                                FacebookLink = "https://www.facebook.com/firengineering/photos/a.2357155807710809/5274719235954437"
                            />
                        </div>

                        <div class = 'eventsColumn'>
                            <EventCards 
                                cardImage = {NetworkingNightBanner}
                                cardImageTitle = "Networking Night"
                                cardContentTitle = "Networking Night"
                                cardContentDesc = "Females+ in RMIT Engineering is excited to announce our Exclusive Networking Night!"
                                DialogTitle = "Exclusive Networking Night"
                                DialogImage = {NetworkingNightBanner}
                                DialogDesc = "Females+ in RMIT Engineering is excited to announce our Exclusive Networking Night! This is your opportunity to connect with industry professionals from 15 leading organisations over canapés and drinks in a relaxed professional setting. Market yourself, your uniqueness, share ideas and grab opportunities."
                                DialogDate = "31 August 2022"
                                DialogTime = "5:00 pm - 7:00 pm"
                                VenueLink = "https://www.google.com/maps/place/113+Swanston+St,+Melbourne+VIC+3000,+Australia/@-37.814975,144.965895,16z/data=!4m5!3m4!1s0x6ad642b5c366a7ed:0xdf015a43a8c2f167!8m2!3d-37.8149747!4d144.9658948?hl=en-IN"
                                DialogVenue = "RMIT, The Capitol"
                                TicketLink = "https://events.humanitix.com/fire-exclusive-networking-night"
                                FacebookLink = "https://www.facebook.com/firengineering/photos/a.2285553004871090/5220462431380118/"
                            />
                        </div>

                        <div class = 'eventsColumn'>
                            <EventCards 
                                cardImage = {EngineeringBallCardBanner}
                                cardImageTitle = "Engineering Ball"
                                cardContentTitle = "Engineering Ball"
                                cardContentDesc = "This is your personal invitation to this year's Engineering Ball - Hollywood Glamour."
                                DialogTitle = "Engineering Ball"
                                DialogImage = {EngineeringBallBanner}
                                DialogDesc = "Get your sleek suits and dazzling dresses out for the classiest night of the year! This is your personal invitation to HOLLYWOOD GLAMOUR. Come join us for unlimited alcohol (including spirits and champagne), endless dancing, and exquisite meals."
                                DialogDate = "8 September 2022"
                                DialogTime = "5:00 pm"
                                VenueLink = "https://www.google.com/maps/place/Melbourne+Pavillion/@-37.7892068,144.9341968,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad65d1ed7bcd833:0x207ba20d64e7b486!8m2!3d-37.7891529!4d144.9361857"
                                DialogVenue = "Melbourne Pavillion"
                                TicketLink = "https://events.humanitix.com/rmit-engineering-ball-2022?fbclid=IwAR32IKMVzSrsXQslcjaqQrJGZp1dftUPbDutdJ0n53PAQy8zcVHEZZEqeGI"
                                FacebookLink = "https://www.facebook.com/events/538807527624708?acontext=%7B%22event_action_history%22%3A[%7B%22surface%22%3A%22page%22%7D]%7D"
                            />
                        </div>

                    </div>

                    <br />
                    <br />
                </div>
            </div>
        </div>
    );
};
  
export default Events;