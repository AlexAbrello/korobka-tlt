import Select from 'react-select'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getParts } from '../redux/resultReducer'

const CustomSelect = styled(Select).attrs({
   styles: {
      control: (provided) => ({
         ...provided,
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
   position: absolute;
   margin: 55px auto 0;
   z-index: 10;
   width: 100%;
`
const options = [
   { value: 'classic', label: 'Классика' },
   { value: 'niva', label: 'Нива' },
   { value: 'desytka', label: 'Десятое семейство' },
   { value: 'priora', label: 'Приора' },
   { value: 'kalina', label: 'Калина' },
   { value: 'granta', label: 'Гранта' },
   { value: 'chevrolet', label: 'Chevrolet Niva' },
]

export const CatalogLayout = () => {

   const dispatch = useDispatch()

   const newValue = ({...options}) => {
      let value = options.value
      dispatch(getParts(value))
   }

   return (
      <>
         <Wrapper>
            <CustomSelect
               options={options}
               placeholder='Выберите модель...'
               onChange={newValue}
            />
         </Wrapper>
         <Outlet />
      </>
   )
}