import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { BsGearFill } from 'react-icons/bs'

import { getParts, getLoader } from '../redux/resultSelectors'
import { Card } from '../components/Card'

const List = styled.div`
   padding: 110px 0 70px;
   display: flex;
   flex-direction: column;
   width: 100%;
   height: 100%;

   @media (min-width: 767px) {
      padding-top: 120px;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
   }
`
const CategoryNav = styled.div`
   width: 100%;
   height: 50px;
   position: fixed;
   bottom: 0;
   background-color: #474747;
   box-shadow: inset 2px 2px 15px #000, inset -2px -2px 15px #000, 0 -5px 10px #346d94;
   z-index: 20;
   display: flex;
   align-items: center;
   overflow-x: auto;
`
const CategoryButton = styled.button`
   width: 100%;
   height: 50px;
   padding: 0px 40px;
   white-space: nowrap;
   background-color: transparent;
   color: white;
   position: relative;

   ::after {
      content: '';
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      width: 1px;
      height: 70%;
      background-color: white;
   }

   :last-child::after {
      display: none;
   }
`
const Loader = styled(BsGearFill)`
   font-size: 100px;
   color: white;
   opacity: .7;
   position: absolute;
   top: 50%;
   left: 40%;
   transform: translate(-50%, -50%);
   animation: whirling 5s linear infinite;

   @media (min-width: 767px) {
      left: auto;
   }

   @keyframes whirling {
      0% {
         transform: rotate(0deg)
      }
      100% {
         transform: rotate(360deg)
      }
   }
`

export const Result = () => {

   const [category, setCategory] = useState('КПП')

   const result = useSelector(getParts)
   const loader = useSelector(getLoader)

   const partsData = result.data
   const categoryData = result.categories

   const changeCategory = (e) => setCategory(e.currentTarget.innerText)

   return (
      <List>
         {loader
            ? <Loader />
            : <>
               {partsData &&
                  partsData.filter(el => el.type.includes(`${category}`)).map(part => {
                     const partInfo = {
                        id: part.id,
                        image: part.titleimage,
                        title: part.title,
                        price: part.price
                     }
                     return (
                        <Link key={part.id} to={`/result/${part.id}`}>
                           <Card key={part.id} {...partInfo} />
                        </Link>
                     )
                  })
               }
               {categoryData &&
                  <CategoryNav>
                     {
                        categoryData.map(cat => {
                           return (
                              <CategoryButton onClick={changeCategory} key={Math.random()}>{cat}</CategoryButton>
                           )
                        })
                     }
                  </CategoryNav>
               }
            </>
         }
      </List>
   )
}