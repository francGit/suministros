import { NavLink } from "react-router-dom"; 
 export default function CardProd({link, categoria }) {
    const { _ID, nombre, marca, cover_cat } = categoria; 
    const linkCompleto = `${link}/${_ID}`;
  

  return (
    <div className="cardItem">
        <div className="header">
            <h2>{nombre}</h2>
            <span className="flag">
                <img src="./arg.png" alt="" />
            </span>
        </div>
        <div className="body">
            <NavLink to={linkCompleto}>
            <img src={cover_cat} alt="" className="img-fluid" />
            </NavLink>
        </div>
        <div className="cta"> 
            <NavLink to={linkCompleto}>Ver más</NavLink>
        </div>
        <div className="brand">
            {
                marca&& 
                <img src={ marca} alt="" className="img-fluid" />
            }
        
        </div>
    </div>
  )
}
