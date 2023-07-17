/* eslint-disable */ 

import React from "react";
import {
  BoxFooter,
  ContainerFooter,
  RowFooter,
  ColumnFooter,
  FooterLink,
  HeadingFooter,
  HeadingFooterSocial,
  ParagraphFooter,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <BoxFooter>
      <h1 style={{ color: "white", 
                   textAlign: "left",
                   marginLeft: "15%", 
                   marginTop: "-50px" }}>
            <br />
            Females+ in RMIT Engineering
        </h1>
        <ContainerFooter>
            <RowFooter>
                <ColumnFooter>
                    <HeadingFooter style={{ marginBottom: "-15px" }}>RMIT University City Campus</HeadingFooter>
                    <ParagraphFooter style={{ marginBottom: "4px" }}>Melbourne, Australia</ParagraphFooter>
                    <FooterLink target={"_blank"} rel='noreferrer' href="mailto:firengineering@rmit.edu.au">firengineering@rmit.edu.au</FooterLink>
                </ColumnFooter>
                <ColumnFooter>
                    <br /><br />
                    <FooterLink style={{ marginLeft: "55px" }} href="/FIRE-website/">Home</FooterLink>
                    <FooterLink style={{ marginLeft: "55px" }} href="/FIRE-website/about">About Us</FooterLink>
                    <FooterLink style={{ marginLeft: "55px" }} href="/FIRE-website/sponsors">Our Sponsors</FooterLink>
                    <FooterLink style={{ marginLeft: "55px" }} href="https://docs.google.com/forms/d/e/1FAIpQLSfhd4fiAH9qcjkvYebNE1pXbK_DYSGB6CfVaE25LLi77exc6Q/viewform" target={'_blank'} rel='noreferrer'>Join the Club!</FooterLink>
                </ColumnFooter>
                <ColumnFooter>
                    <br /><br />
                    <FooterLink href="/FIRE-website/gallery">Gallery</FooterLink>
                    <FooterLink href="/FIRE-website/upcomingevents">Upcoming Events</FooterLink>
                    <FooterLink href="/FIRE-website/faqs">FAQs</FooterLink>
                </ColumnFooter>
                <ColumnFooter>
                    <HeadingFooterSocial style={{ marginBottom: "4px" }}>Social Media</HeadingFooterSocial>
                    <FooterLink target={"_blank"} rel='noreferrer' href="https://www.facebook.com/firengineering/">
                        <span> Facebook </span>
                    </FooterLink>
                    <FooterLink target={"_blank"} rel='noreferrer' href="https://www.instagram.com/firengineering_/">
                        <span> Instagram </span>
                    </FooterLink>
                    <FooterLink target={"_blank"} rel='noreferrer' href="https://www.linkedin.com/company/firengineering/">
                        <span> Linkedin </span>
                    </FooterLink>
                    <FooterLink target={"_blank"} rel='noreferrer' href="https://discord.com/channels/799421462598647851/799422177912684596">
                        <span> Discord </span>
                    </FooterLink>
                    <FooterLink target={"_blank"} rel='noreferrer' href="https://www.tiktok.com/@firengineering?lang=en">
                        <span> TikTok </span>
                    </FooterLink>
                </ColumnFooter>
            </RowFooter>
        </ContainerFooter>
    </BoxFooter>
  );
};

export default Footer;