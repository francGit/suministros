import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Inicio from '../components/Inicio'
import Page404 from '../components/Page404'
import Productos from '../components/Productos' 
import { Contacto } from '../components/Contacto' 
import { Nosotros } from '../components/Nosotros' 
import { Header } from '../components/layout/Header'
import { Categoria } from '../components/Categoria' 
import { Footer } from '../components/layout/Footer'
import { Producto } from '../components/Producto'
 const MyRoutes = () => {
  return (
   <BrowserRouter>
        {/* HEADER */}
        <Header />
        {/* CONTENT */}
        
       <Routes>
          <Route index element={<Inicio />} /> 
          <Route path='/' element={<Inicio />} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='*' element={<Page404/>} />
          <Route path='/productos' element={<Productos/>} />     
          <Route path='/categoria' element={<Categoria/>} />  
          <Route path='/nosotros' element={<Nosotros/>} />  
          <Route path='/contacto' element={<Contacto/>} />
          <Route path='/producto/:id' element={<Producto/>} />
        </Routes>
       
        {/* FOOTER */}
        <Footer/>
   </BrowserRouter>
  )
}

export default MyRoutes