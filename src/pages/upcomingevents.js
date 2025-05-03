/* eslint-disable */ 

import React from 'react';
import { Helmet } from "react-helmet";
import "./pagesCSS/upcomingEvents.css";

import AfternoonTeaNetworking from './pagesResources/images/EventBanners/AfternoonTeaNetworking.jpg';

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
                                cardImage = {AfternoonTeaNetworking}
                                cardImageTitle = "Afternoon Tea Networking Event: Explore, Connect, Empower!"
                                cardContentTitle = "Afternoon Tea Networking Event: Explore, Connect, Empower!"
                                cardContentDesc = "Calling all industry enthusiasts and future innovators! Join us for an enriching afternoon tea session at our event, where you can engage in meaningful conversations and make connections for life. This event is your exclusive backstage pass into the dynamic world of four powerhouse companies: PwC, LendLease, Jacobs, and Arcadis."
                                DialogTitle = "FIRE+ Afternoon Tea Networking Event"
                                DialogImage = {AfternoonTeaNetworking}
                                DialogDesc = {`Calling all industry enthusiasts and future innovators! Join us for an enriching afternoon tea session at our event, where you can engage in meaningful conversations and make connections for life. This event is your exclusive backstage pass into the dynamic world of four powerhouse companies: PwC, LendLease, Jacobs, and Arcadis.

                                Here's why you can't miss out:
                                
                                    🚀 Explore Innovations: Immerse yourself in the latest trends and innovations from PwC, LendLease, Jacobs, and Arcadis.
                                
                                    🤝 Connect with Industry Representatives: Rub elbows with industry experts, and seasoned professionals. This is your chance to expand your network and forge meaningful connections that could shape your future career!
                                
                                    🌐 Expand Your Horizons: Dive deep into diverse engineering realms and gain valuable insights from the best in the business.
                                
                                    🍕 Free Food & Refreshments: Enjoy complimentary snacks and refreshments while mingling with like-minded peers and industry insiders.`.split("\n").map((item, key) => {
                                  return <span key={key}>{item}<br/></span>
                                })}
                                DialogDate = "16 May 2024"
                                DialogTime = "11:00 am - 2:00 pm"
                                VenueLink = "https://www.google.com/maps/place/Garden+Building+RMIT+University/@-37.8080571,144.9641693,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad6439030e6c711:0x9e8c8a7cc366da0e!8m2!3d-37.8080571!4d144.9641693!16s%2Fg%2F11snq0wn3h?authuser=0&hl=en"
                                DialogVenue = "RMIT Garden Building"
                                TicketLink = "https://events.humanitix.com/afternoon-tea-networking-event "
                                FacebookLink = "https://www.facebook.com/firengineering/posts/pfbid0zbeqyydqNPnnEibaaByjF6dG8uiuWxSTquwXdBZqzAVNZUSXQMq7rJs1jhd76KZfl"
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