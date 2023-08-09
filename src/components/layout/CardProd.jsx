import { NavLink } from "react-router-dom";
import img from '../../assets/dummy.png' 
import imgflag from '../../assets/dummyflag.png' 
 export default function CardProd({link, categoria }) {
    const { id, name,meta } = categoria; 
    const linkCompleto = `${link}/${id}`;
  

  return (
    <div className="cardItem">
        <div className="header">
            <h2>{name}</h2>
                {meta[meta["bandera-pais"]] != "" ?
                <span className="flag">
                 <img src={meta["bandera-pais"]} alt={meta["pais"]} />
                 </span>

                  :<span className="flag"><img src={imgflag} alt={meta["pais"]} /> </span>
            
                } 
        </div>
        <div className="body">
            <NavLink to={linkCompleto}>
             
            {meta["cover-cat"] != "" ? <img src={meta["cover-cat"]} alt="" className="img-fluid" /> : <img src={img} alt="" className="img-fluid" />}
            </NavLink>
        </div>
        <div className="cta"> 
            <NavLink to={linkCompleto}>Ver más</NavLink>
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
