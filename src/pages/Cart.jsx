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
`
const Title = styled.div`
   text-align: center;
`
const Count = styled.div``
const Price = styled.div``
const EmptyCart = styled.div`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%,-50%);
   color: white;
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
                              <Title>{ el.title}</Title>
                              <Count></Count>
                              <Price>{ el.price}</Price>
                           </CartElement>
                        )
                     })
                  }
               <button>Оформить заявку</button>
               </Wrapper>
               : <EmptyCart>
                  Корзина пуста...
               </EmptyCart>
         }
      </>
   )
}