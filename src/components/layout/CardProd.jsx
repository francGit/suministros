import { NavLink } from "react-router-dom";
import {Categoria} from "../Categoria"
 export default function CardProd({link}) {
  return (
    <div className="cardItem">
        <div className="header">
            <h2>USABLUEBOOK</h2>
            <span className="flag">
                <img src="./arg.png" alt="" />
            </span>
        </div>
        <div className="body">
            <NavLink to="/categoria">
            <img src="./A50_ALTA_PRESION.png" alt="" className="img-fluid" />
            </NavLink>
        </div>
        <div className="cta"> 
            <NavLink to={link}>Ver más</NavLink>
        </div>
        <div className="brand">
         <img src="./indesur.png" alt="" className="img-fluid" />
        </div>
    </div>
  )
}
