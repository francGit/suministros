import React from "react";
import { NavLink } from "react-router-dom";
import img from '../../assets/dummy.png'
import imgflag from '../../assets/dummyflag.png'
export default function CardProdb({ product }) {
  if (!product) {
    return null; // O puedes renderizar un mensaje de error o componente de carga
  }
  const { title, meta, id } = product;
  
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
            <NavLink to={`/producto/${id}`}>
            <img src={meta.cover} alt="" className="img-fluid" />
            </NavLink>
             : <img src={img} alt="" className="img-fluid" /> 
       
       }
        
        <h3>{meta.caracteristicas}</h3> 
      </div>
      <div className="cta">
        <NavLink to={`/producto/${id}`}>Ver más</NavLink>
      </div>
    </div>
  );
}