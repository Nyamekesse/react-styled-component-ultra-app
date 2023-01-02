import React from "react";
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterSubHeading,
  FooterSubText,
  FooterSubscription,
  Form,
  FormInput,
  SocialIcon,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./Footer.elements";
import { Button } from "../../globalStyles";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterSubscription>
          <FooterSubHeading>
            Join our exclusive membership to enjoy latest news and trends
          </FooterSubHeading>
          <FooterSubText>You can unsubscribe at anytime</FooterSubText>
          <Form>
            <FormInput name="email" type="email" placeholder="your email" />
            <Button fontBig>Subscribe</Button>
          </Form>
        </FooterSubscription>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/sign-up">How it works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms of Services</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/sign-up">How it works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms of Services</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/sign-up">How it works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms of Services</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/sign-up">How it works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms of Services</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">
              <SocialIcon />
              ULTRA
            </SocialLogo>
            <WebsiteRights>ULTRA &copy; 2022</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="" target="_blank" aria-label="Facebook">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="" target="_blank" aria-label="Facebook">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="" target="_blank" aria-label="Facebook">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="" target="_blank" aria-label="Facebook">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterContainer>
    </>
  );
};

export default Footer;
