import { NavLink } from "react-router-dom"

 export const ContacBanner = () => {
  return (
    <div className="bannerContact">
        <div className="container-fluid">
          <div className="row">
          <div className="col-md-8">
            <h2>Contáctenos</h2>
            <p>Si desea más información respecto a nuestro productos o requiere ayuda, puede hacerlo desde el siguiente botón.</p>
            </div>
            
            <div className="col-md-4">
             <div className="cta">  
                  <NavLink to="/contacto">Contáctenos</NavLink>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}
