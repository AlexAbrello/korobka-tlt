import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { BsGearFill } from 'react-icons/bs'

import { getParts, getLoader, getValue } from '../redux/resultSelectors'
import { setCategoryValue } from '../redux/resultReducer'
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
export const CategoryNav = styled.div`
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
const BigGear = styled(BsGearFill)`
   font-size: 100px;
   color: white;
   opacity: .7;
   animation: whirling 6s linear infinite;

   @keyframes whirling {
      0% {
         transform: rotate(0deg)
      }
      100% {
         transform: rotate(360deg)
      }
   }
`
const SmallGear = styled(BsGearFill)`
   font-size: 70px;
   color: #346d94;
   position: absolute;
   right: 0;
   animation: whirlingBack 2.9s linear infinite;

   @keyframes whirlingBack {
      0% {
         transform: rotate(0deg)
      }
      100% {
         transform: rotate(-360deg)
      }
   }
`
const LoaderBox = styled.div`
   width: 170px;
   height: 170px;
   position: absolute;
   top: 50%;
   left: 40%;
   transform: translate(-50%, -50%);
   transform: rotate(-45deg);

   @media (min-width: 767px) {
      left: auto;
   }
`

export const Result = () => {

   const category = useSelector(getValue)
   const result = useSelector(getParts)
   const loader = useSelector(getLoader)
   const dispatch = useDispatch()

   const partsData = result.data
   const categoryData = result.categories

   const changeCategory = (e) => dispatch(setCategoryValue(e.currentTarget.innerText))

   return (
      <List>
         {loader
            ? <LoaderBox>
               <SmallGear />
               <BigGear />
            </LoaderBox>
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