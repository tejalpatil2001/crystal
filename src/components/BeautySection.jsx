import React from "react";
import styled from "styled-components";
import img1 from "../assets/img3.png";
import img2 from "../assets/img4.png";
import img3 from "../assets/img5.png";
import img4 from "../assets/img6.png";
import img5 from "../assets/img7.png";

const Section = styled.div`
  width: 100%;
  padding: 60px 20px;
  background-color: #f7fbfc;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 480px) {
    padding: 30px 15px;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #4a3740;
  text-align: center;
  margin-bottom: 12px;
  font-family: "Playfair Display", serif;

  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    font-size: 19px;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #6b6b6b;
  text-align: center;
  max-width: 600px;
  margin-bottom: 40px;
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(2, 180px);
  gap: 10px;
  padding: 20px;
  width: 80%;

  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    width: 100%;
    gap: 10px;
  }
`;

const Box1 = styled.div`
  background-color: #ffadad; /* Light Red */
  background-image: url(${img1});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 15px;

  @media (max-width: 480px) {
    height: 150px;
  }
`;

const Box2 = styled.div`
  background-color: #ffd6a5; /* Light Orange */
  background-image: url(${img2});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 15px;

  @media (max-width: 480px) {
    height: 150px;
  }
`;

const Box3 = styled.div`
  background-color: #fdffb6; /* Light Yellow */
  background-image: url(${img3});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 15px;

  @media (max-width: 480px) {
    height: 150px;
  }
`;

const Box4 = styled.div`
  background-color: #caffbf; /* Light Green */
  background-image: url(${img4});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 15px;

  @media (max-width: 480px) {
    height: 150px;
  }
`;

const Box5 = styled.div`
  background-color: #9bf6ff; /* Light Blue */
  background-image: url(${img5});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 15px;

  @media (max-width: 480px) {
    height: 150px;
    grid-column: span 2; /* Full width */
  }
`;

const BeautySection = () => {
  return (
    
    <Section>
      <Title>
        We are Experienced in making you <br /> very Beautiful
      </Title>
      <Subtitle>Experience personalized treatments that leave you feeling relaxed, radiant, and renewed.</Subtitle>

      <Container>
        <Box1 />
        <Box2 />
        <Box3 />
        <Box4 />
        <Box5 />
      </Container>
    </Section>
  );
};

export default BeautySection;
