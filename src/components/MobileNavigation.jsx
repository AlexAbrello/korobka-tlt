import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { IoReorderThreeOutline, IoCloseOutline } from 'react-icons/io5'

const Wrapper = styled.div`
   @media (min-width: 1024px) {
      display: none;
   }
`
const NavigationList = styled.nav`
   width: 100%;
   height: 100vh;
   padding: 20px 0;
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: rgba(0, 0, 0, .9);
   position: absolute;
   z-index: 20;
   top: 50px;
   left: 0;

   & * {
      font-size: 30px;
      color: white;
      opacity: .9;
      margin-bottom: 50px;
      :last-child {
         margin-bottom: 0;
      }
   }
`
const BurgerMenu = styled.div`
   & * {
      font-size: 34px;
      color: white;
      opacity: .7;
      cursor: pointer;
      margin-left: 10px;
   }
`

export const MobileNavigation = () => {

   const [menu, setMenu] = useState(false)

   return (
      <Wrapper>
         {menu &&
            <NavigationList>
               <Link onClick={() => setMenu(false)} to='/'>Главная</Link>
               <Link onClick={() => setMenu(false)} to='/about'>О Нас</Link>
               <Link onClick={() => setMenu(false)} to='/delivery'>Доставка</Link>
               <Link onClick={() => setMenu(false)} to='/contacts'>Контакты</Link>
            </NavigationList>
         }
         <BurgerMenu onClick={() => setMenu(!menu)}>
            { menu ? <IoCloseOutline /> : <IoReorderThreeOutline />  }
         </BurgerMenu>
      </Wrapper>
   )
}