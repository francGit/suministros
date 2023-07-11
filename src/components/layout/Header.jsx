import { NavLink } from "react-router-dom"
import Logo from '../../assets/logo.svg'  
import { Container, Grid } from "@mui/material"

export const Header = () => {
  return (
    <>
      <header> 
       <section>
          <div className="container">
            <div className="row d-flex justify-content-between">
                <div className="col-md-2">
                <div className="logo">
                <h1>
                <NavLink to="/" className={({isActive}) => isActive ? "active" : "" } ><img src={Logo} alt="" /></NavLink> 
                </h1>
            </div>
                </div>
                <div className="col-md-8">
                <nav className="navBarMenu">
                <div className="iconMenu"></div>
                <ul>
                    <li>
                        <NavLink to="/" className={({isActive}) => isActive ? "active" : "" } >Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/productos" className={({isActive}) => isActive ? "active" : "" }>Productos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/producto/1" className={({isActive}) => isActive ? "active" : "" }>Producto</NavLink>
                    </li>
                    <li>
                        <NavLink to="/categoria" className={({isActive}) => isActive ? "active" : "" }>Categoria</NavLink>
                    </li>
                 
                    <li>
                        <NavLink to="/nosotros" className={({isActive}) => isActive ? "active" : "" }>Nosotros</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto" className={({isActive}) => isActive ? "active" : "" }>Contacto</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto" target="_blank" className={({isActive}) => isActive ? "active" : "" }>Brochure</NavLink>
                    </li>
                </ul>
                
            </nav>
 
                </div>
            </div>
          </div>
       </section>
           
  
            
        
      
            
      </header>
    </>
  )
}
