import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import img from '../../assets/dummy.png' 
export default function CardProdb({ product,subcatId }) {
  if (!product) {
    return null; // O puedes renderizar un mensaje de error o componente de carga
  }
  const { title, meta, id } = product;
  const {pathname} = useLocation(); 
  const subcategoriaValue = pathname.split("/subcategoria/")[1];
   
  return (
    <div className="cardItem singleProd">
      <div className="header">
        <h2>{title.rendered}</h2>
        <span className="flag">
            {
                meta.bandera != "" ?  <img src="../arg.png" alt={meta.pais} /> : ""
            } 
        </span>
      </div>
      <div className="body">
         
      {meta.cover != "" ? 
            <NavLink to={`/producto/${product.id}?${subcategoriaValue}`}>
            <img src={meta.cover} alt="" className="img-fluid" />
            </NavLink>
             : <img src={img} alt="" className="img-fluid" /> 
       
       }
        
        <h3>{meta.caracteristicas}</h3> 
      </div>
      <div className="cta">
      <NavLink to={`/producto/${product.id}?${subcategoriaValue}`}  >
  Ver más
</NavLink>
      </div>
    </div>
  );
}