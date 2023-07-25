import { NavLink } from "react-router-dom"; 
 export default function CardSoporte({link}) {
  return (
    <div className="cardItem singleProd soporteCard">
    
        <div className="body"> 
            <img src="./indesur.svg" alt="" className="img-fluid" style={{maxWidth:240}} /> 
        </div>
        <div className="cta"> 
            <NavLink to={link}>Ver más</NavLink>
        </div> 
    </div>
  )
}

