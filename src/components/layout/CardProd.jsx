import { NavLink } from "react-router-dom";
import img from '../../assets/dummy.png' 
import imgflag from '../../assets/dummyflag.png' 
import { motion  as m } from "framer-motion";
import ProgressiveImage from "react-progressive-graceful-image"; 

 export default function CardProd({link, categoria }) {
    const { id, name,meta } = categoria; 
    const linkCompleto = `${link}/${id}`;
  

  return (
    <m.div className="cardItem"
    initial={{ opacity: 0  }}
     transition={{delay:0.3, duration:0.6} } 
      whileInView={{ opacity: 1 }}
       viewport={{ once: true }}
    >
        <m.div className="header"
            initial={{ opacity: 0, y:"30%" }}
            transition={{delay:0.3, duration:0.5} } 
            whileInView={{ opacity: 1, y:0 }}
            viewport={{ once: true }}
        >
            <h2>{name}</h2>
                {meta[meta["bandera-pais"]] != "" ?
                <span className="flag">
                 <img src={meta["bandera-pais"]} alt={meta["pais"]} />
                 </span>

                  :<span className="flag"><img src={imgflag} alt={meta["pais"]} /> </span>
            
                } 
        </m.div>
        <m.div className="body"
            initial={{ opacity: 0, y:"30%" }}
            transition={{delay:0.3, duration:0.9} } 
            whileInView={{ opacity: 1, y:0 }}
            viewport={{ once: true }}
        >
            <NavLink to={linkCompleto}>
             
            {meta["cover-cat"] != "" ?
                <ProgressiveImage  
                    src={meta["cover-cat"]}
                    placeholder={img}
                  >
                    {(src, loading) => (
                      <img
                        style={{ opacity: loading ? 0.5 : 1 }}
                        src={src}
                        alt="an alternative text"
                        className="img-fluid"
                      />
                    )}
                  </ProgressiveImage>  : <img src={img} alt="" className="img-fluid" />}
            </NavLink>
        </m.div>
        <m.div className="cta"
        initial={{ opacity: 0  }}
        transition={{delay:0.5, duration:0.9} } 
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        > 
            <NavLink to={linkCompleto}>Ver más</NavLink>
        </m.div>
        <m.div className="brand"
        initial={{ opacity: 0  }}
        transition={{delay:0.5, duration:0.9} } 
        whileInView={{ opacity: 1  }}
        viewport={{ once: true }}
        >
            {
                meta["marca_logo"] && 
                <img src={meta["marca_logo"]} alt={meta["marca-nombre"]} className="img-fluid" />
            }
        
        </m.div>
    </m.div>
  )
}
