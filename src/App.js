import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

import { Header } from './components/Header'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Delivery } from './pages/Delivery'
import { Contacts } from './pages/Contacts'
import { CatalogLayout } from './components/CatalogLayout'
import { Result } from './pages/Result'
import { Details } from './pages/Details'
import { Cart } from './pages/Cart'
import { Form } from './pages/Form'

const Background = styled.div`
   width: 100vw;
   height: 100vh;
   background-color: #474747;
   box-shadow: inset 2px 2px 15px #000, inset -2px -2px 15px #000;
   overflow-y: auto;
`

function App() {
   return (
      <Background>
         <Header />
         <main>
            <Routes>
               <Route path='/' element={<CatalogLayout />} >
                  <Route index element={<Home />} />
                  <Route path='result' element={<Result />} />
                  <Route path='result/:id' element={<Details />} />
               </Route>
               <Route path='about' element={<About />} />
               <Route path='delivery' element={<Delivery />} />
               <Route path='contacts' element={<Contacts />} />
               <Route path='cart' element={<Cart />} />
               <Route path='form' element={<Form />} />
            </Routes>
         </main>
      </Background>
   );
}

export default App;
