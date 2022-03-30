import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   padding: 60px 10px 0;
   color: white;
`
const CartElement = styled.div`
   margin-bottom: 30px;
   position: relative;

   ::after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 90%;
      height: 1px;
      background-color: white;
   }

   @media (min-width: 1024px) {
      ::after {
         width: 70%;
      }
   }
`
const Title = styled.div`
   text-align: center;
   margin-bottom: 10px;
`
const Body = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0px 5px;

   @media (min-width: 767px) {
      justify-content: space-around;
   }
`
export const Container = styled.div`
   width: 100%;
   max-width: 1200px;
   margin: 0 auto;
`
const Counter = styled.div`
   display: flex;
   align-items: center;
`
const DeleteButton = styled.button`
   position: relative;
   width: 30px;
   height: 30px;
   margin-right: 20px;
   background-color: transparent;

   ::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      width: 3px;
      height: 20px;
      background-color: red;
   }
   ::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-45deg);
      width: 3px;
      height: 20px;
      background-color: red;
   }
`
const MinusButton = styled.button`
   position: relative;
   width: 30px;
   height: 30px;
   margin-right: 15px;
   background-color: transparent;

   :before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 15px;
      height: 3px;
      background-color: #346d94;
      box-shadow: 2px 2px 4px #000;
   }
`
const PlusButton = styled.button`
   position: relative;
   width: 30px;
   height: 30px;
   margin-left: 15px;
   background-color: transparent;

   ::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 3px;
      height: 15px;
      background-color: #346d94;
      box-shadow: 2px 2px 4px #000;
   }
   ::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(90deg);
      width: 3px;
      height: 15px;
      background-color: #346d94;
   }
`
const Number = styled.div`
   width: 30px;
   height: 30px;
   text-align: center;
   padding-top: 10px;
   white-space: nowrap;
`
const Price = styled.div`

   ::before {
      content: 'Цена ';
   }
   ::after {
      content: ' рублей';
   }
`
const EmptyCart = styled.div`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%,-50%);
   color: white;
`
const OrderButton = styled(Link).attrs({
   to: '/form'
})`
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
const Total = styled.div`
   text-align: end;
   margin-right: 5px;

   ::before {
      content: 'Общая стоимость: ';
   }
   ::after {
      content: ' рублей';
   }

   @media (min-width: 767px) {
      margin-right: 100px;
   }
`

export const Cart = () => {

   let cartList = JSON.parse(localStorage.getItem('cart'))

   const [list, setList] = useState(cartList)
   const [total, setTotal] = useState(0)

   const deletePosition = (id) => {
      if (cartList.length === 1) {
         localStorage.clear()
         setList(null)
      } else {
         let data = cartList.filter(el => el.id !== id)
         localStorage.setItem("cart", JSON.stringify(data))
         cartList = JSON.parse(localStorage.getItem('cart'))
         setList(cartList)
      }
   }

   const changeCount = (id, value) => {
      let elem = cartList.findIndex(el => el.id === id)
      cartList[elem].count += value
      if (cartList[elem].count < 1) return deletePosition(id)
      localStorage.setItem("cart", JSON.stringify(cartList))
      cartList = JSON.parse(localStorage.getItem('cart'))
      setList(cartList)
   }

   useEffect(() => {
      if (list) {
         let sum = list.reduce((total, el) => el.count * el.price + total, 0)
         setTotal(sum)
      }
   }, [list])

   return (
      <>
         {
            list !== null
               ? <Wrapper>
                  {
                     list.map(el => {
                        return (
                           <CartElement key={el.id}>
                              <Title>{el.title}</Title>
                              <Container>
                                 <Body>
                                    <Counter>
                                       <DeleteButton onClick={() => deletePosition(el.id)} />
                                       <MinusButton onClick={() => changeCount(el.id, -1)} />
                                       <Number>{el.count} шт.</Number>
                                       <PlusButton onClick={() => { changeCount(el.id, 1) }} />
                                    </Counter>
                                    <Price>{el.price * el.count}</Price>
                                 </Body>
                              </Container>
                           </CartElement>
                        )
                     })
                  }
                  <Container>
                     <Total>{total}</Total>
                  </Container>
                  <OrderButton>Оформить заявку</OrderButton>
               </Wrapper>
               : <EmptyCart>
                  Корзина пуста...
               </EmptyCart>
         }
      </>
   )
}