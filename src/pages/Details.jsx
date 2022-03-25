import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { getParts } from '../redux/resultSelectors'
import { CategoryNav } from './Result'

const Wrapper = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   flex-direction: column;
   position: relative;
   z-index: 10;
   background-color: #474747;
   box-shadow: inset 2px 2px 15px #000, inset -2px -2px 15px #000;
   padding: 60px 10px 0;
`
const Container = styled.div`
   width: 100%;
   max-width: 1200px;
   flex: 1 1 auto;
   margin: 0 auto;
`
const TitlePart = styled.div`
   width: 100%;
   position: relative;
   text-align: center;
   padding: 5px 0 15px;
   color: white;
   letter-spacing: 1px;

   ::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 90%;
      height: 1px;
      background-color: white;
      opacity: .7;
   }
`
const DescriptionPart = styled.div`
   width: 100%;
   position: relative;
   line-height: 120%;
   overflow-y: auto;
   padding: 10px 5px;
   color: white;
`
const PricePart = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   position: relative;
   bottom: 50px;
   padding: 15px 5px;

   ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 90%;
      height: 1px;
      background-color: white;
      opacity: .7;
   }

   @media (min-width: 767px) {
      justify-content: space-around;
   }
`
const Price = styled.div`
   color: white;

   ::before {
      content: 'Цена: ';
   }
   ::after {
      content: ' рублей';
   }
`
const BackButton = styled.button`
   color: white;
   opacity: .7;
   font-size: 16px;
   background-color: transparent;
   margin-left: 20px;

   ::before {
      content: '← ';
   }
`

export const Details = () => {

   const { id } = useParams()
   const result = useSelector(getParts)
   const navigate = useNavigate()

   const goBack = () => navigate(-1)

   const detailInfo = (result.data).filter(el => el.id == id)

   return (
      <>
         {
            detailInfo.map(el => {
               return (
                  <Wrapper key={Math.random()}>
                     <TitlePart>{el.title}</TitlePart>
                     <Container>
                        <DescriptionPart dangerouslySetInnerHTML={{ __html: el.discription }} />
                     </Container>
                     <PricePart>
                        <Price>{el.price}</Price>
                        <button>Добавить в корзину</button>
                     </PricePart>
                  </Wrapper>
               )
            })
         }
         <CategoryNav><BackButton onClick={goBack}>Назад</BackButton></CategoryNav>
      </>
   )
}