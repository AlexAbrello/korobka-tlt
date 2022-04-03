import styled from 'styled-components'

const Wrapper = styled.section`
   width: 100%;
   max-width: 1200px;
   margin: 70px auto 0px;
   color: white;
   
`

export const Info = ({ children }) => {
   return (
      <Wrapper>
         {children}
      </Wrapper>
   )
}