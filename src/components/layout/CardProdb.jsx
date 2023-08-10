import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import img from '../../assets/dummy.png' 
import {motion as m} from 'framer-motion'
export default function CardProdb({ product,subcatId }) {
  if (!product) {
    return null; // O puedes renderizar un mensaje de error o componente de carga
  }
  const { title, meta, id } = product;
  const {pathname} = useLocation(); 
  const subcategoriaValue = pathname.split("/subcategoria/")[1];
   
  return (
    <m.div className="cardItem singleProd"
    initial={{ opacity: 0 }}
    transition={{delay:0.3, duration:0.6} } 
    whileInView={{ opacity: 1  }}
    viewport={{ once: true }}
    >
      <m.div className="header"
         initial={{ opacity: 0, y:"30%" }}
         transition={{delay:0.3, duration:0.9} } 
         whileInView={{ opacity: 1, y:0 }}
         viewport={{ once: true }}
      >
        <h2>{title.rendered}</h2>
        <span className="flag">
            {
                meta.bandera != "" ?  <img src="../arg.png" alt={meta.pais} /> : ""
            } 
        </span>
      </m.div>
      <m.div className="body"
         initial={{ opacity: 0, y:"30%" }}
         transition={{delay:0.3, duration:0.9} } 
         whileInView={{ opacity: 1, y:0 }}
         viewport={{ once: true }}
      >
         
      {meta.cover != "" ? 
            <NavLink to={`/producto/${product.id}?${subcategoriaValue}`}>
            <img src={meta.cover} alt="" className="img-fluid" />
            </NavLink>
             : <img src={img} alt="" className="img-fluid" /> 
       
       }
        
        <h3>{meta.caracteristicas}</h3> 
      </m.div>
      <m.div className="cta"
         initial={{ opacity: 0, y:"30%" }}
         transition={{delay:0.3, duration:0.9} } 
         whileInView={{ opacity: 1, y:0 }}
         viewport={{ once: true }}
      >
      <NavLink to={`/producto/${product.id}?${subcategoriaValue}`}  >
  Ver más
</NavLink>
      </m.div>
    </m.div>
  );
}