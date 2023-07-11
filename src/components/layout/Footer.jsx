import React from 'react'
import LogoFooter from '../../assets/logo-withe.svg'
export const Footer = () => {
  return (
    <section className="footer">
    <div className="container">
     <div className="row d-flex justify-content-between">
       <div className="col-md-2">
          <div className="logoFooter pt-3">
            <img src={LogoFooter} alt="" />
          </div>
       </div>
       <div className="col-md-3">
       <h5>Atención al Cliente:</h5>
        <p>Tels. +57 1 2 01 94 46 - +57 1 201 81 21</p>
        <p>Fax. +57 1 3 71 02 14</p>
        <h5>Ubicación:</h5>
        <p>Carrera 32 Nº 13 - 36 - Bogotá, COLOMBIA</p> 
       </div>
       <div className="col-md-3">
       <h5>Servicio Técnico:</h5>
        <p>servicio@suministrossis.com</p> 
        <h5>Compras y seguimiento:</h5>
        <p>sis@suministrossis.com</p> 
       </div>
       <div className="col-md-2">
        <h5>SÍGUENOS EN REDES</h5>
       <ul>
         <li><a href="https://www.behance.net/famupinto" target="_blank" rel="noreferrer">BE</a></li>
         <li><a href="https://github.com/francGit" target="_blank" rel="noreferrer">GIT</a></li>
         <li><a href="https://www.linkedin.com/in/francisco-jose-muneton-pinto/" target="_blank" rel="noreferrer">LIN</a></li>
       </ul>
       </div>
     </div>
     <div className="row pt-4">
      <hr />
      <div className="col-md-4">
        <small>Copyright © 2023 Todos los derechos reservados.</small>
      </div>
      <div className="col-md-4">
        <ul>
          <li>
            <a href=""><small>Términos de uso</small></a>
          </li>
          <li>
            <a href=""><small>Politicas de privacidad</small></a>
          </li>
        </ul>
      </div>
     </div>
   </div>
  </section>
  )
}
