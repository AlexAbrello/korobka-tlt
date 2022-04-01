import styled from 'styled-components'

const PopUpWrapper = styled.div`
   width: 80%;
   height: 40%; 
   padding: 0px 5px;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   z-index: 100;
   background-color: rgba(0, 0, 0, .9);
   border-radius: 5px;
   border: 1px solid rgba(255, 255, 255, .7);
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   @media (min-width: 767px) {
      height: 30%;
   }

   @media (min-width: 1024px) {
      width: 60%;
      height: 40%;
   }
`

export const PopUp = ({ children }) => {
   return (
      <PopUpWrapper>
         {children}
      </PopUpWrapper>
   )
}