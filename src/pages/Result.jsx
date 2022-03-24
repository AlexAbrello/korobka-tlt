import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getParts } from '../redux/resultSelectors'
import { Card } from '../components/Card'

const List = styled.div`
   padding: 140px 0 10px;
   display: flex;
   flex-direction: column;

   @media (min-width: 767px) {
      width: 100%;
      height: 100%;
      padding-top: 155px;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
   }
`

export const Result = () => {

   const parts = useSelector(getParts)

   return (
      <List>
         {parts &&
            parts.map(part => {
               const partInfo = {
                  id: part.id,
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
      </List>
   )
}