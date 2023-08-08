import { NavLink } from "react-router-dom"; 
 export default function CardSubCat({subcategoria} ) {  
     
  return (
    <div className="cardItem">
        <div className="header">
            <h2>Nombre </h2>
            <span className="flag">
                <img src="../arg.png" alt="" />
            </span>
        </div>
        <div className="body">
            <NavLink to="/subcategoria">
            <img src="" alt="" className="img-fluid" />
            </NavLink>
        </div>
        <div className="cta"> 
        <NavLink to={`/subcategoria/3`}>Ver más</NavLink>
        </div>
        <div className="brand"> 
                <img src="../arg.png" alt="" className="img-fluid" />
           
        
        </div>
    </div>
  )
}
