import styled from 'styled-components'

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
const Container = styled.div`
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
      content: ' рублей'
   }
`
const EmptyCart = styled.div`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%,-50%);
   color: white;
`
const OrderButton = styled.button`
   width: 50%;
   height: 40px;
   max-width: 375px;
   margin: 0 auto;

   @media (min-width: 767px) {
      width: 30%;
   }
   @media (min-width: 1024px) {
      width: 15%;
   }
`

export const Cart = () => {

   const cartList = JSON.parse(localStorage.getItem('cart'))

   return (
      <>
         {
            cartList !== null
               ? <Wrapper>
                  {
                     cartList.map(el => {
                        return (
                           <CartElement key={Math.random()}>
                              <Title>{el.title}</Title>
                              <Container>
                                 <Body>
                                    <Counter>
                                       <DeleteButton />
                                       <MinusButton />
                                       <Number>10 шт.</Number>
                                       <PlusButton />
                                    </Counter>
                                    <Price>{el.price}</Price>
                                 </Body>
                              </Container>
                           </CartElement>
                        )
                     })
                  }
                  <OrderButton>Оформить заявку</OrderButton>
               </Wrapper>
               : <EmptyCart>
                  Корзина пуста...
               </EmptyCart>
         }
      </>
   )
}