import { NavLink } from "react-router-dom"; 
import img from '../../assets/dummy.png'
import imgflag from '../../assets/dummyflag.png'
 export default function CardSubCat({subcategoria} ) {  
     const {id,name,meta} = subcategoria
  return (
    <div className="cardItem">
        <div className="header">
            <h2>{name} </h2>
            {meta[meta["bandera-pais"]] != "" ? 
            
            <span className="flag"> <img src={meta["bandera-pais"]} alt={meta["pais"]} className="img-fluid" /></span> : <span className="flag"><img src={imgflag} className="img-fluid" /></span>
                 
              
             }
        </div>
        <div className="body">
            
            {meta["cover-cat"] != "" ? 
            <NavLink to={`/subcategoria/${id}`}>
            <img src={meta["cover-cat"]} alt="" className="img-fluid" />
            </NavLink>
             : <img src={img} alt="" className="img-fluid" /> 
       
       }
            
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
