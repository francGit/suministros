import { NavLink } from "react-router-dom"; 
 export default function CardProd({link, categoria }) {
    const { id, name,meta } = categoria; 
    const linkCompleto = `${link}/${id}`;
  

  return (
    <div className="cardItem">
        <div className="header">
            <h2>{name}</h2>
            <span className="flag">
                <img src={meta["bandera-pais"]} alt={meta["pais"]} />
            </span>
        </div>
        <div className="body">
            <NavLink to={linkCompleto}>
            <img src={meta["cover-cat"]} alt="" className="img-fluid" />
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
