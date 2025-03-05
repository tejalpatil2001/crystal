import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const NavbarContainer = styled.nav`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 70px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  top: 0;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 0 20px;
    height:60px
  }
`;

const Logo = styled.div`
  /* background-color: black; */
  width: 200px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    width: 100px;
  }
`;

const LogoIcon = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 480px) {
    height: 60%;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.li`
  font-size: 14px;
  color: #000;
  cursor: pointer;
`;

const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  cursor: pointer;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LoginButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  background-color: transparent;
  border: 1px solid #000;
  border-radius: 4px;
  cursor: pointer;
`;

const SignupButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  background-color: #000;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
  @media (max-width: 480px) {
  font-size: 18px;

  }
`;

const Drawer = styled.div`
  position: fixed;
  z-index: 200;
  width: 50%;
  top: 0;
  right: ${({ open }) => (open ? "0" : "-100%")};
  height: 100vh;
  background-color: #fff;
  box-shadow: -2px 0 4px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const DrawerCloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
`;

const DrawerLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DrawerButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <NavbarContainer>
        <Logo>
          <LogoIcon />
        </Logo>

        <NavLinks>
          <NavLink>Home</NavLink>
          <NavLink
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            About Us
          </NavLink>
          <NavLink
            onClick={() =>
              document
                .getElementById("services")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Services
          </NavLink>
          <NavLink
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Us
          </NavLink>
        </NavLinks>

        <ButtonGroup>
          <LoginButton onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }>Book</LoginButton>
        </ButtonGroup>

        <MenuButton onClick={() => setDrawerOpen(true)}>
          <FiMenu />
        </MenuButton>
      </NavbarContainer>

      <Drawer open={drawerOpen}>
        <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
          <FiX />
        </DrawerCloseButton>

        <DrawerLinks>
          <NavLink onClick={() =>
              document
                .getElementById("home")
                .scrollIntoView({ behavior: "smooth" })
            }>Home</NavLink>
          <NavLink onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }>About Us</NavLink>
            <NavLink
            onClick={() =>
              document
                .getElementById("services")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Services
          </NavLink>
          <NavLink
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Us
          </NavLink>
        </DrawerLinks>

        <DrawerButtons>
          <LoginButton onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }>Book</LoginButton>
        </DrawerButtons>
      </Drawer>
      </>
  );
};

export default Navbar;
