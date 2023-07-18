import { NavLink } from "react-router-dom"

 export const ContacBanner = () => {
  return (
    <div className="bannerContact">
        <div className="container-fluid">
          <div className="row">
          <div className="col-md-4">
            <h2>Contáctenos</h2>
            <p>Incididunt labore dolore magna aliqua enim veniamullamco.</p>
            </div>
            <div className="col-md-5">
                <p>Incididunt labore dolore magna aliqua enim veniamullamco laboris nisiut aliquip.
            Incididunt labore dolore magna aliqua enim veniamullamco laboris nisiut aliquip.</p>
            </div>
            <div className="col-md-3">
             <div className="cta">  
                  <NavLink to="/contacto">Contáctenos</NavLink>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}
