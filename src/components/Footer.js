import { Container } from "./container.styled";
import { Flex } from "./styles/flex.style";
import React from 'react';
import { StyledFooter } from "./styles/footer.styled";
import SocialIcons from "./SocialIcons";
const Footer = () => {
  return (
    <div> 
        <StyledFooter>
        <Container>
            <img src="./images/logo_white.svg" alt=""/>
        <Flex> 
        <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />

        </Flex> 
        <p>&copy:2021 Huddle.All rights reserved</p>
        </Container> 
        </StyledFooter>


    </div>
  )
}

export default Footer