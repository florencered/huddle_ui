import React from 'react' 
import { Container } from './container.styled';
import { StyledHeader,Nav,Logo } from './styles/header.styled'; 
import { Button } from './styles/Button.styled'; 
import { Flex } from './styles/flex.style'; 
import { Image } from './styles/header.styled';
const Header = () => { 
  return ( 
    
    <StyledHeader> 
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="logo of the website"/> 
          <Button>Try it free!!</Button>
        </Nav> 
        <Flex> 
          <div>
            <h1>Build  The Community Your Fans Will Love</h1> 
            <p>lorem-ipsumIpsum adipisicing cillum voluptate deserunt id cillum eiusmod ipsum magna. Elit magna enim commodo proident nisi irure nostrud laboris quis tempor incididunt. Non aliquip qui cupidatat cupidatat anim esse est veniam velit nulla consequat. Eiusmod occaecat fugiat nisi magna eu tempor est voluptate occaecat est nostrud id ex nisi. Eiusmod nostrud sit commodo ullamco eu irure. Cillum eiusmod dolore sit et culpa eiusmod eu id incididunt dolore dolor Lorem irure. Anim aute esse irure enim velit exercitation ut enim in incididunt commodo nisi.
            </p>
            <Button bg="#ff0099">
              Get Started for free 
            </Button> 
            <Image src="./images/illustration-mockups.svg">

            </Image>
          </div>

        </Flex>
      </Container>
    </StyledHeader>
  )
}

export default Header