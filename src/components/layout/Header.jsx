import {useEffect } from 'react'
import { NavLink } from "react-router-dom"
import Logo from '../../assets/logo.svg'  
import Icondwn from '../../assets/Iconly-Download.svg'  
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import useFethDataOption from '../../hooks/useFetchDataOption'
import {optiontUrl} from '../../../config'
export const Header = () => {
  const {loadingOption, resultOption, errorOption} = useFethDataOption(`${optiontUrl}`) 
   useEffect(() => {
    if (screen.width < 960) {
        autocomplete()
    }  
   }, [autocomplete])

   if(loadingOption) return <p></p>
    
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
                <div className="col-md-10 col-sm-4 mdLogo">
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
                            {/* <li>
                                <NavLink to="/producto/1" className={({isActive}) => isActive ? "active" : "" }>Producto</NavLink>
                            </li>
                            <li>
                                <NavLink to="/categoria" className={({isActive}) => isActive ? "active" : "" }>Categoria</NavLink>
                            </li>
                         */}
                            <li>
                                <NavLink to="/nosotros" className={({isActive}) => isActive ? "active" : "" }>Nosotros</NavLink>
                            </li>
                            <li>
                                <NavLink to="/documentacion" className={({isActive}) => isActive ? "active" : "" }>Documentación</NavLink> 
                            </li>
                            <li>
                              <NavLink to="/galeria" className={({isActive}) => isActive ? "active" : "" }>Galeria</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contacto" className={({isActive}) => isActive ? "active" : "" }>Contacto</NavLink>
                            </li>
                            <li> 
                                <NavLink to={resultOption.link_brochure && resultOption.link_brochure} target="_blank" className="brochure">Brochure <i><img src={Icondwn} alt="" /></i></NavLink>
                            </li>
                        </ul> 
                    </nav>
                </div>
 
                </div>
            </div>
          </div>
       </section>
           
  
            
        
      
            
      </header>
      <FloatingWhatsApp 
        phoneNumber={resultOption.numero_whatsapp}
        accountName="Soporte SIS"
        avatar='https://suministros.famu.com.co/favicon.svg'
        placeholder='Escribe un mensaje' 
        statusMessage='Comercializamos soluciones integrales'
        chatMessage='Hola! 🤝 Como puedo ayudarte?'
        allowClickAway
        notification
        notificationSound 
        />
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