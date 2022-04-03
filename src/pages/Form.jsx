import { useForm, Controller } from "react-hook-form"
import styled from 'styled-components'
import { ImWarning } from 'react-icons/im'
import Select from 'react-select'
import { useState } from "react"
import { Link } from "react-router-dom"

import { Container } from "./Cart"
import { PopUp } from "../components/PopUp"
import { Done } from "./Details"
import { Text } from "./Details"

const Wrapper = styled.div`
   width: 100%;
   padding-top: 70px;
`
const FormWrapper = styled.form`
   width: 90%;
   margin: 0 auto;
   display: flex;
   flex-direction: column;

   @media (min-width: 767px) {
      width: 50%;
   }
`
const SubmitButton = styled.button`
   width: 50%;
   height: 40px;
   max-width: 375px;
   margin: 30px auto;
   color: white;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 10px;
   border: 1px solid white;
   background-color: transparent;

   @media (min-width: 767px) {
   width: 30%;
   }
`
const OkButton = styled(Link).attrs({ to: '/' })`
   width: 50%;
   height: 40px;
   max-width: 375px;
   margin: 30px auto;
   color: white;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 10px;
   border: 1px solid white;
   background-color: transparent;

   @media (min-width: 767px) {
      width: 30%;
   }
   @media (min-width: 1024px) {
      width: 15%;
   }
`
const Label = styled.label`
   color: white;
`
const Input = styled.input`
   width: 100%;
   height: 40px;
   margin: 10px auto;
   border-radius: 5px;
   padding: 0px 10px;
`
const Error = styled.div`
   color: red;
`
const DeliverySelect = styled(Select).attrs({
   styles: {
      control: (provided) => ({
         ...provided,
         cursor: 'pointer',
         backgroundColor: 'white',
         color: '#000',
         borderRadius: '5px',
         height: '40px',
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
   width: 100%;
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
`
const options = [
   { value: 'ПЭК', label: 'ПЭК' },
   { value: 'Деловые Линии', label: 'Деловые Линии' },
   { value: 'GTD', label: 'GTD' },
   { value: 'Энергия', label: 'Энергия' },
]

export const Form = () => {

   const {
      register,
      formState: { errors },
      handleSubmit,
      reset,
      control,
   } = useForm()

   const [popup, setPopup] = useState(true)

   const onSubmit = (data) => {
      console.log(JSON.stringify(data))
      setPopup(true)
      reset()
   }

   const getValue = (value) => {
      if (value) {
         options.find(option => option.value === value)
      }
   }

   const cleanLocalStorage = () => {
      setPopup(false)
      localStorage.removeItem('cart')
   }

   return (
      <Wrapper>
         <Container>
            <FormWrapper onSubmit={handleSubmit(onSubmit)}>
               <Label>
                  Ваше имя:
                  <Input
                     placeholder="Имя"
                     {...register('firstName', {
                        required: "Поле обязательно к заполнению"
                     })}
                  />
               </Label>
               <Error>{errors?.firstName && <p><ImWarning /> {errors?.firstName.message}</p>}</Error>
               <Label>
                  Ваша фамилия:
                  <Input
                     placeholder="Фамилия"
                     {...register('lastName', {
                        required: "Поле обязательно к заполнению"
                     })}
                  />
               </Label>
               <Error>{errors?.lastName && <p><ImWarning /> {errors?.lastName.message}</p>}</Error>
               <Label>
                  Ваше отчество:
                  <Input
                     placeholder="Отчество"
                     {...register('fatherName', {
                        required: "Поле обязательно к заполнению"
                     })}
                  />
               </Label>
               <Error>{errors?.fatherName && <p><ImWarning /> {errors?.fatherName.message}</p>}</Error>
               <Label>
                  Ваш E-mail:
                  <Input
                     placeholder="E-mail (необязательно)"
                     type="email"
                     {...register('email')}
                  />
               </Label>
               <Label>
                  Ваш телефон:
                  <Input
                     placeholder="Номер телефона"
                     type="number"
                     {...register('phoneNumber', {
                        required: "Поле обязательно к заполнению"
                     })}
                  />
               </Label>
               <Error>{errors?.phoneNumber && <p><ImWarning /> {errors?.phoneNumber.message}</p>}</Error>
               <Label>
                  Город доставки:
                  <Input
                     placeholder="Название города"
                     {...register('city', {
                        required: "Поле обязательно к заполнению"
                     })}
                  />
               </Label>
               <Error>{errors?.city && <p><ImWarning /> {errors?.city.message}</p>}</Error>
               <Controller
                  control={control}
                  name='delivery'
                  rules={{
                     required: "Поле обязательно к заполнению"
                  }}
                  render={
                     ({ field: { onChange, value }, fieldState: { error } }) => (
                        <div>
                           <Label>
                              Выберите траспортную компанию:
                              <DeliverySelect
                                 placeholder="Транспортная компания"
                                 options={options}
                                 value={getValue(value)}
                                 onChange={(newValue) => onChange(newValue.value)}
                              />
                           </Label>
                           <Error>{error && <p><ImWarning /> {error.message}</p>}</Error>
                        </div>
                     )
                  }
               />
               <SubmitButton type="submit">Отправить</SubmitButton>
            </FormWrapper>
         </Container>
         {
            popup && 
            <PopUp>
               <Done size='40px'/>
                  <Text>Ваша заявка отправлена! Мы свяжемся с Вами в ближайшее время.</Text> 
                  <OkButton onClick={cleanLocalStorage}>Ok</OkButton>
            </PopUp>
         }
      </Wrapper>
   )
}