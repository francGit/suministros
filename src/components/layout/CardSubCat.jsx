import { NavLink } from "react-router-dom"; 
 export default function CardSubCat({subcategoria} ) {  
     const {id,name,meta} = subcategoria
  return (
    <div className="cardItem">
        <div className="header">
            <h2>{name} </h2>
            <span className="flag">
                <img src={meta["bandera-pais"]} alt="" />
            </span>
        </div>
        <div className="body">
            <NavLink to="/subcategoria">
            {meta["cover-cat"] != "" ? <img src={meta["cover-cat"]} alt="" className="img-fluid" /> : <p>hello</p>
            
        }
            </NavLink>
        </div>
        <div className="cta"> 
        <NavLink to={`/subcategoria/${id}`}>Ver más</NavLink>
        </div>
        <div className="brand"> 
                {
                    meta["marca_logo"] && 
                    <img src={meta["marca_logo"]} alt={meta["marca-nombre"]} className="img-fluid" />
                }
           
        
        </div>
    </div>
  )
}
