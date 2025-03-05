import React from "react";
import styled from "styled-components";
import image from "../assets/Rectangle 3.png";
import image2 from "../assets/Rectangle 6.png";
import { IoSearch } from "react-icons/io5";

const Container = styled.div`
  height: 640px;
  width: 100%;
  background-color: blue;
  display: flex;
  @media (max-width: 768px) {
    height: 400px;
  }
  @media (max-width: 480px) {
    height: 200px;
  }
`;

const Color = styled.div`
  background-color: black;
  width: 30%;
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 70%;
`;
const Image = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
`;

const Wrapper = styled.div`
  height: 640px;
  width: 100%;
  position: absolute;
  top: 70px;
  background-image: url(${image2});
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 768px) {
    height: 400px;
    top: 60px;
  }
  @media (max-width: 480px) {
    height: 200px;
  }
`;

const Content = styled.div`
  position: relative;
  max-width: 600px;
  height: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content:center;
  @media (max-width: 768px) {
    max-width: 500px;
  }
  @media (max-width: 480px) {
    max-width: 350px;
    height: 150px;
  }
`;

const Tagline = styled.p`
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 1px;
  margin-bottom: 10px;
  opacity: 0.8;
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const Heading = styled.h1`
  font-size: 55px;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 1.2;
  color: #f7e5c1;
  font-family: "Playfair Display", serif;
  @media (max-width: 768px) {
    font-size: 32px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  margin-bottom: 10px;

  }
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
  opacity: 0.9;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 8px;
  width:70%;

  }
`;

const SearchBar = styled.div`
  display: flex;
  width: 700px;
  background: #fff;
  border-radius: 50px;
  padding: 10px;
  padding-left: 30px;
  gap: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    width: 450px;
    padding: 8px;
  padding-left: 20px;

  }
  @media (max-width: 480px) {
    display: none;
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid black;
  background-color: transparent;
  font-size: 14px;
  width: 100%;
  outline: none;
  color: #333;
  ::placeholder {
    color: #aaa;
  }
`;

const SearchButton = styled.button`
  background: #c97ba6;
  color: #fff;
  padding: 15px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 50%;
  &:hover {
    background: #a7658a;
  }
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 12px;
  }
  @media (max-width: 480px) {
    font-size: 10px;
    padding: 10px;
  }
`;

const HeroSection = () => {
  return (
    <div>
      <Container>
        <Color></Color>
        <ImageContainer>
          <Image></Image>
        </ImageContainer>
      </Container>
      <Wrapper>
        <Content>
          <Tagline>Hair Salon, Masseuse, Beauty Salon</Tagline>
          <Heading>
            Find a service <br /> close to you
          </Heading>
          <Description>
          Looking for the perfect place to relax, refresh, and rejuvenate? Explore the best salons and wellness centers near you and book your service now!
          </Description>
          <SearchBar>
            <Input placeholder="Book your services..." />
            <Input placeholder="Where" />
            <SearchButton>
              <IoSearch size={20} />
              Search
            </SearchButton>
          </SearchBar>
        </Content>
      </Wrapper>
    </div>
  );
};

export default HeroSection;
