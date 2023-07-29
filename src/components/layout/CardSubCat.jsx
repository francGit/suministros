import { NavLink } from "react-router-dom"; 
 export default function CardSubCat({subcategoria} ) { 
    const {imagen_sub_categoria, nombre_completo_sub_categoria } = subcategoria;
  return (
    <div className="cardItem">
        <div className="header">
            <h2>{nombre_completo_sub_categoria}</h2>
            <span className="flag">
                <img src="../arg.png" alt="" />
            </span>
        </div>
        <div className="body">
            <NavLink to="/subcategoria">
            <img src={imagen_sub_categoria} alt="" className="img-fluid" />
            </NavLink>
        </div>
        <div className="cta"> 
            <NavLink to="/subcategoria">Ver más</NavLink>
        </div>
        <div className="brand"> 
                <img src="../arg.png" alt="" className="img-fluid" />
           
        
        </div>
    </div>
  )
}
