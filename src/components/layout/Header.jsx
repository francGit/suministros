import {useEffect } from 'react'
import { NavLink } from "react-router-dom"
import Logo from '../../assets/logo.svg'  
import Icondwn from '../../assets/Iconly-Download.svg'  
export const Header = () => {
   
   useEffect(() => {
    if (screen.width < 960) {
        autocomplete()
    }  
   }, [autocomplete])
   
    
  return (
    <>
      <header> 
       <section>
          <div className="container">
            <div className="row d-flex justify-content-between">
                <div className="col-md-2 col-sm-8 mdLogo">
                <div className="logo">
                <h1>
                <NavLink to="/" className={({isActive}) => isActive ? "active" : "" } ><img src={Logo} alt="" /></NavLink> 
                </h1>
                 </div>
                </div>
                <div className="col-md-9 col-sm-4 mdLogo">
                <div className="boxNavBar">
                    <div className="menuToggle "></div>
                    <nav className="navBarMenu">  
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
                                <NavLink to="" target="_blank" className="brochure">Brochure <i><img src={Icondwn} alt="" /></i></NavLink>
                            </li>
                        </ul> 
                    </nav>
                </div>
 
                </div>
            </div>
          </div>
       </section>
           
  
            
        
      
            
      </header>
    </>
  )
}

///funcionalidad menu mobile
function autocomplete() {
  const menuToggle =  document.querySelector('.menuToggle') 
  const navigation = document.querySelector('.navBarMenu')
  const boyBox = document.querySelector('.navBarMenu')
  const inneBtn = document.querySelector('.navBarMenu a')
  menuToggle.onclick = function(){
    menuToggle.classList.toggle('openToggle')
    navigation.classList.toggle('openMenu')
    boyBox.classList.toggle('openBody')
  }

  inneBtn.onclick = function(){
    menuToggle.classList.toggle('openToggle')
    navigation.classList.toggle('openMenu')
    boyBox.classList.toggle('openBody')
  }
    
  

}