import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavigationList = styled.nav`
   & * {
      font-size: 18px;
      color: white;
      opacity: .9;
      margin-right: 30px;
      text-decoration: none;
      :last-child {
         margin-right: 0;
      }

      @media (max-width: 1023px) {
         display: none;
      }
   }
`

export const Navigation = () => {
   return (
      <NavigationList>
         <Link to='/'>Главная</Link>
         <Link to='/about'>О Нас</Link>
         <Link to='/delivery'>Доставка</Link>
         <Link to='/contacts'>Контакты</Link>
      </NavigationList>
   )
}