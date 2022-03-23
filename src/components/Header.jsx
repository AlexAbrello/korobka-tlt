import styled from 'styled-components'
import { RiShoppingCartLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

import { MobileNavigation } from './MobileNavigation'
import { Navigation } from './Navigation'
import logo from '../assets/logo_1.png'

const HeaderElement = styled.header`
   width: 100%;
   box-shadow: inset 2px 2px 15px #000, inset -2px -2px 15px #000, 0 5px 10px #346d94;
   background-color: #474747;
   height: 50px;
   position: fixed;
   z-index: 30;
`
const Container = styled.div`
   margin: 0 auto;
   max-width: 1200px;
`
const Wrapper = styled.div`
   height: 50px;
   display: flex;
   align-items: center;
   justify-content: space-between;
`
const Title = styled(Link).attrs({
   to: '/'
})`
   color: white;
   font-family: 'Montserrat Alternates', sans-serif;
   letter-spacing: 3px;
   opacity: .7;
   font-size: 18px;
   font-weight: 700;
   display: flex;
   align-items: center;

   @media(min-width: 1024px) {
   }
`
const Img = styled.img`
   width: 40px;
`
const Cart = styled(RiShoppingCartLine)`
   font-size: 26px;
   color: white;
   margin-right: 10px;

   @media(min-width: 1024px) {
      margin-right: 0;
   }
`

export const Header = () => {
   return (
      <HeaderElement>
         <Container>
            <Wrapper>
               <MobileNavigation />
               <Title>КОРОБКА<Img src={logo} />ТЛТ</Title>
               <Navigation />
               <Link to='/cart'><Cart /></Link>
            </Wrapper>
         </Container>
      </HeaderElement>
   )
}