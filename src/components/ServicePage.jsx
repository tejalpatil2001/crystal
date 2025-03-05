import React from "react";
import styled from "styled-components";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import img1 from "../assets/service1.png";
import img2 from "../assets/service2.png";
import img3 from "../assets/service3.png";
import img4 from "../assets/service4.png";

const ServiceSection = styled.section`
  padding: 80px 40px;
  background-color: #fff;
  text-align: center;
`;

const Title = styled.h2`
  color: #ba7894;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 10px;
  @media (max-width: 480px) {
    font-size: 12px;
  }
  
`;

const Heading = styled.h1`
  font-size: 36px;
  color: #33272a;
  font-weight: 700;
  margin-bottom: 10px;
  font-family: "Playfair Display", serif;
  @media (max-width: 480px) {
    font-size: 19px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  color: #5b5b5b;
  max-width: 600px;
  margin: 0 auto 40px;
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const ServicesWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding-bottom: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

const ServiceCard = styled.div`
  flex: 0 0 270px;
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #eee;
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 20px;
  text-align: left;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  color: #8b6b7d;
  font-size: 14px;
  margin-bottom: 10px;

  p{
    display: flex;
    align-items: center;
    gap: 2px;
  }
  span {
    color: #000;
    font-weight: 600;
  }
`;

const Name = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #33272a;
  margin-bottom: 6px;
  font-family: "Playfair Display", serif;
`;

const Address = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #5b5b5b;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px 0;
  border: 1px solid #ba7894;
  background-color: #fff;
  color: #ba7894;
  font-weight: 600;
  font-size: 14px;
  border-radius: 8px;
  cursor: pointer;
  font-family: "Playfair Display", serif;

  &:hover {
    background-color: #ba7894;
    color: white;
  }
`;

const ServicePage = () => {
  const services = [
    {
      name: "Premium Haircut",
      address: "2267 Main st, Fort Myers, 33901",
      reviews: "104 reviews",
      rating: 4.5,
      image: img1,
    },
    {
      name: "Color & Highlights",
      address: "2267 Main st, Fort Myers, 33901",
      reviews: "56 reviews",
      rating: 4.2,
      image: img2,
      
    },
    {
      name: "Luxury Spa",
      address: "2267 Main st, Fort Myers, 33901",
      reviews: "98 reviews",
      rating: 4.8,
      image: img3,
    },
    {
      name: "Bridal Makeup",
      address: "2267 Main st, Fort Myers, 33901",
      reviews: "38 reviews",
      rating: 4.9,
      image: img4,
    },
  ];

  return (
    <ServiceSection>
      <Title>OUR SERVICES</Title>
      <Heading>Recommended</Heading>
      <Description>
      Experience the best care with our highly recommended services.
      </Description>

      <ServicesWrapper>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <Image src={service.image} alt={service.name} />
            <CardContent>
              <Rating>
                <p>
                <FaStar /> {service.rating}</p>
                <span>{service.reviews}</span>
              </Rating>
              <Name>{service.name}</Name>
              <Address>
                <FaMapMarkerAlt /> {service.address}
              </Address>
              <Button>BOOK NOW</Button>
            </CardContent>
          </ServiceCard>
        ))}
      </ServicesWrapper>
    </ServiceSection>
  );
};

export default ServicePage;
