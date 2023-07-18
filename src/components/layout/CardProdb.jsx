import { NavLink } from "react-router-dom";
import {Categoria} from "../Categoria"
 export default function CardProdb({link}) {
  return (
    <div className="cardItem singleProd">
        <div className="header">
            <h2>D15</h2>
            <span className="flag">
                <img src="./arg.png" alt="" />
            </span>
        </div>
        <div className="body">
           
            <img src="./A50_ALTA_PRESION.png" alt="" className="img-fluid" />
            <h3>½ pulgada - 33 litros/min</h3>
             
        </div>
        <div className="cta"> 
            <NavLink to={link}>Ver más</NavLink>
        </div> 
    </div>
  )
}

