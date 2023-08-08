import {Routes, Route, BrowserRouter } from 'react-router-dom'
import Inicio from '../components/Inicio'
import Page404 from '../components/Page404'
import Productos from '../components/Productos' 
import { Contacto } from '../components/Contacto' 
import { Nosotros } from '../components/Nosotros' 
import { Header } from '../components/layout/Header'
import { Categoria } from '../components/Categoria' 
import { SubCategoria } from '../components/SubCategoria' 
import { Footer } from '../components/layout/Footer'
import { Producto } from '../components/Producto'
import ScrollToTop from '../helpers/ScrollTop'
import { AnimatePresence } from 'framer-motion'
import { Soporte } from '../components/Documentacion'
import { InternaSoporte } from '../components/InternaSoporte'
import { Galeria } from '../components/Galeria'
 const MyRoutes = () => { 
  return (
    <AnimatePresence>
   <BrowserRouter>
        {/* HEADER */}
        <Header />
        {/* CONTENT */}
        
       <Routes>
          <Route index element={<Inicio />} /> 
          <Route path='/' element={<Inicio />} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='*' element={<Page404/>} />
          <Route path='/categoria/:id' element={<Categoria/>} />  
          <Route path='/subcategoria/:id' element={<SubCategoria/>} />  
          <Route path='/productos' element={<Productos/>} />     
          <Route path='/producto/:id' element={<Producto/>} />
          <Route path='/documentacion' element={<Soporte/>} />  
          {/* <Route path='/soporte/:id' element={<InternaSoporte/>} /> */}
          <Route path='/nosotros' element={<Nosotros/>} />  
          <Route path='/galeria' element={<Galeria/>} />  
          <Route path='/contacto' element={<Contacto/>} />
          
        </Routes>
       
        {/* FOOTER */}
        <ScrollToTop/>
        <Footer/>
   </BrowserRouter>
   </AnimatePresence>
  )
}

export default MyRoutes