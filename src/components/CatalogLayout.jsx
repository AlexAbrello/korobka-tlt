import Select from 'react-select'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { getParts } from '../redux/resultReducer'

const CustomSelect = styled(Select).attrs({
   styles: {
      control: (provided) => ({
         ...provided,
         cursor: 'pointer',
         backgroundColor: 'white',
         color: '#000',
         borderRadius: '5px',
         height: '50px',
         border: '0',
         boxShadow: 'none'
      }),
      option: (provided, state) => ({
         ...provided,
         cursor: 'pointer',
         color: '#000',
         backgroundColor: 'white'
      })
   }
})`
   width: 80%;
   margin: 10px auto;

   & input {
      padding-left: .25rem;
   }

   & * {
      color: #000 !important;
   }

   & > div[id] {
      background-color: white;
   }

   @media (min-width: 1024px) {
      margin: 10px auto;
   }
`
const Wrapper = styled.div`
   position: fixed;
   top: 50px;
   left: 50%;
   transform: translateX(-50%);
   z-index: 10;
   width: 90%;
   padding-top: 5px;
   background-color: #474747;
   box-shadow: inset 0px 0px #000;

   @media (min-width: 1024px) {
      width: 95%;
   }
`
const options = [
   { value: 'classic', label: 'Классика' },
   { value: 'samara', label: 'ВАЗ 2108-99/2113-15' },
   { value: 'niva', label: 'Нива' },
   { value: 'desyatka', label: 'Десятое семейство' },
   { value: 'priora', label: 'Приора' },
   { value: 'kalina', label: 'Калина' },
   { value: 'granta', label: 'Гранта' },
   { value: 'chevrolet', label: 'Chevrolet Niva' },
]

export const CatalogLayout = () => {

   const dispatch = useDispatch()

   const newValue = ({ ...options }) => {
      let value = options.value
      dispatch(getParts(value))
   }

   return (
      <>
         <Wrapper>
            <Link to='/result'>
               <CustomSelect
                  options={options}
                  placeholder='Выберите модель...'
                  onChange={newValue}
               />
            </Link>
         </Wrapper>
         <Outlet />
      </>
   )
}