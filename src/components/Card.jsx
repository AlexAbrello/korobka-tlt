import styled from 'styled-components'
import logo from '../assets/logo_1.png'

const Wrapper = styled.div`
   width: 200px;
   height: 350px;
   margin: 30px auto 0;
   background-color: #f1f1f1;
   outline: 1px solid #818181;
   box-shadow: 5px 5px 5px rgb(0 0 0 / 80%);
   cursor: pointer;
   overflow: hidden;
   position: relative;

   ::before {
      content: "";
      position: absolute;
      z-index: 2;
      bottom: 0;
      right: 0;
      border-bottom: 130px solid #131313;
      border-left: 120px solid transparent;
     }
  
     ::after {
      content: "";
      position: absolute;
      z-index: 1;
      bottom: -1px;
      height: 100%;
      border-bottom: 130px solid #346d94;
      border-right: 200px solid transparent;
     }

   @media (min-width: 767px) {
      margin: 20px 
   }
`
const SecondWrapper = styled.div`
   width: 100%;
   height: 100%;
   position: relative;

   ::before {
   content: "";
    position: absolute;
    z-index: 3;
    bottom: 20px;
    right: 0;
    width: 70px;
    height: 70px;
    background: url(${logo}) center no-repeat;
    background-size: 60% 60%;
    opacity: 0.9;
   }
`

const CardImage = styled.img`
   display: block;
   width: 80%;
   margin: 10px auto;
   outline: 2px solid #818181;
   border-radius: var(--radii);
   object-fit: cover;
   object-position: center;
   box-shadow: var(--shadow);
`
const CardBody = styled.div`
   
`
const CardTitle = styled.h4`
   padding: 0 1px;
   text-align: center;
`
const CardPrice = styled.h4`
   text-align: center;
`

export const Card = ({ title, price, image }) => {
   return (
      <Wrapper>
         <SecondWrapper>
            <CardImage src={image} alt={title} />
            <CardBody>
               <CardTitle>{title}</CardTitle>
               <CardPrice>{price}</CardPrice>
            </CardBody>
         </SecondWrapper>
      </ Wrapper>
   )
}
