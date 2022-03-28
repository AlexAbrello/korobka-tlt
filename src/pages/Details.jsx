import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {MdDoneOutline} from 'react-icons/md'

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
const BuyButton = styled.button`
   color: white;
   height: 15px;
   background-color: transparent;
`
const BuyNotice = styled.div`
   color: white;
   height: 15px;
   display: flex;
   align-items: center;
`
const Done = styled(MdDoneOutline)`
   font-size: 16px;
   fill: green;
   margin-right: 10px;
`

export const Details = () => {

   const { id } = useParams()
   const result = useSelector(getParts)
   const navigate = useNavigate()

   const goBack = () => navigate(-1)
   const addToCart = () => {
      let data = []
      if (localStorage.getItem('cart')) {
         data = JSON.parse(localStorage.getItem('cart'))
      }
      data.push(...detailInfo)
      localStorage.setItem("cart", JSON.stringify(data))
      setState(true)
   }

   const detailInfo = (result.data).filter(el => el.id == id)

   const [state, setState] = useState(false)

   useEffect(() => {
      if (localStorage.getItem('cart')) {
         let cart = JSON.parse(localStorage.getItem('cart'))
         cart.map(el => {
            if (el.id == id) {
               setState(true)
            }
         })
      }
   }, [])

   return (
      <>
         {
            detailInfo.map(el => {
               return (
                  <Wrapper key={el.id}>
                     <TitlePart>{el.title}</TitlePart>
                     <Container>
                        <DescriptionPart dangerouslySetInnerHTML={{ __html: el.discription }} />
                     </Container>
                     <PricePart>
                        <Price>{el.price}</Price>
                        {
                           state
                              ? <BuyNotice><Done /> Уже в корзине</BuyNotice>
                              : <BuyButton onClick={addToCart}>Добавить в корзину</BuyButton>
                        }
                     </PricePart>
                  </Wrapper>
               )
            })
         }
         <CategoryNav><BackButton onClick={goBack}>Назад</BackButton></CategoryNav>
      </>
   )
}