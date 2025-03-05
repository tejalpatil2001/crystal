import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: #241520;
  width: 100%;
  color: #fff;
  padding: 40px 80px;
  text-align: left;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 30px 40px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const FooterContent = styled.div`
  width: 85%;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #ffffff;
  padding-bottom: 20px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);

  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h4`
  font-size: 18px;
  margin-bottom: 15px;
  font-family: "Playfair Display", serif;
`;

const Link = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 5px;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`;

const ContactInfo = styled.div`
  font-size: 14px;
  line-height: 3;

  @media (max-width: 768px) {
    line-height: 2;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding: 10px;
  font-size: 14px;
  color: white;
  background-color: #160813;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Icon = styled.a`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ecbfd3;
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  &:hover {
    background-color: #fff;
    color: #22171b;
  }
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterContent>
          <FooterTop>
            <Logo>SERVICEMARKET</Logo>
            <SocialIcons>
              <Icon href="#">
                <FaFacebookF />
              </Icon>
              <Icon href="#">
                <FaTwitter />
              </Icon>
              <Icon href="#">
                <FaLinkedinIn />
              </Icon>
              <Icon href="#">
                <FaInstagram />
              </Icon>
            </SocialIcons>
          </FooterTop>
          <FooterLinks>
            <Column>
              <Title>Explore</Title>
              <Link href="#">Home</Link>
              <Link href="#">About Us</Link>
              <Link href="#">Services</Link>
              <Link href="#">Blog</Link>
              <Link href="#">Contact Us</Link>
            </Column>
            <Column>
              <Title>Utility Pages</Title>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms of Use</Link>
            </Column>
            <Column>
              <Title>Keep in Touch</Title>
              <ContactInfo>
                <strong>Address :</strong> Mariendalsvej 50D 2 2000
                Frederiksberg.
                <br />
                <strong>Mail :</strong> support@servicemarket.com
                <br />
                <strong>Phone :</strong> (+22) 123 - 4567 - 900
              </ContactInfo>
            </Column>
          </FooterLinks>
        </FooterContent>
      </FooterContainer>
      <FooterBottom>
        <span>&copy; 2023 ServiceMarket.dk | All rights reserved.</span>
      </FooterBottom>
    </>
  );
};

export default Footer;
