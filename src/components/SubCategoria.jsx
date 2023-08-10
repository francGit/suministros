 import { motion } from "framer-motion"
import { NavLink, useParams,useLocation } from "react-router-dom"
import { FaAngleLeft } from "react-icons/fa"
import Icondwn from '../assets/Iconly-Download-red.svg'  
import CardProdb  from "./layout/CardProdb" 
import img from '../assets/dummy.png'
import useFethSubCat from '../hooks/useFetchSub'
import useFetchProds from '../hooks/useFetchProds'
import {catUrlWp} from '../../config'  
import {prodUrlWp} from '../../config' 
import { Preloader } from './utils/Preloader';   
import { useEffect, useState } from "react"
 export const SubCategoria = () => {
  const { id } = useParams(); 
  const { loadingCat, dataCat, errorCat } = useFethSubCat(`${catUrlWp}/${id}`)
  const { loadingProd, dataProd, errorProd } = useFetchProds(`${prodUrlWp}/?per_page=20`);
  const [relatedProducts, setRelatedProducts] = useState([])

  useEffect(() => {
    if(!loadingProd && !errorProd){
      const productsRelatedToSubCat = dataProd.filter(product => product.categorias.includes(parseInt(id)));
      setRelatedProducts(productsRelatedToSubCat)
    }
  }, [dataCat, loadingProd, errorProd, id])
  
  
  if (loadingCat || loadingProd) return <Preloader />; 
  const { description,meta, parent} = dataCat; 
  
  const subcatId = id;
  // console.log(dataCat) 
  
  return (
    <motion.div className='main pHead'
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0,transition:{duration:1}}}
    >
      <section className="pt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <motion.div className="infoImg"
                 initial={{ opacity: 0, y:"30%" }}
                 transition={{delay:0.3, duration:0.9} } 
                 whileInView={{ opacity: 1, y:0 }}
                 viewport={{ once: true }}
              >
                <div className="body">
                  {
                    meta["cover-cat"] != "" ? <img src={meta["cover-cat"]} className="img-fluid" alt="" /> : <img src={img} className="img-fluid" alt="" />  
                  }
                </div>
              </motion.div>
            </div> 
            <div className="col-md-7">
              <div className="infoSub">
              <motion.div className="breadcrumbs"
                 initial={{ opacity: 0, y:"30%" }}
                 transition={{delay:0.3, duration:0.9} } 
                 whileInView={{ opacity: 1, y:0 }}
                 viewport={{ once: true }}
              >
                    <small>PRODUCTOS/{meta["marca_nombre"]}</small>
                </motion.div> 
                <motion.div className="header"
                 initial={{ opacity: 0, y:"30%" }}
                 transition={{delay:0.3, duration:0.9} } 
                 whileInView={{ opacity: 1, y:0 }}
                 viewport={{ once: true }}
                >
                <div className="origen">
                <small>País de origen:</small>
                <span className="flag"><img src={meta["bandera-pais"]} alt="" /></span>
                </div>
                
                  <div className="actions">
                    <div className="brand">
                      {
                        meta["marca_logo"] != "" ? <img src={meta["marca_logo"]} className="img-fluid" alt="" /> : ""
                      }
                      
                    </div>
                    <div className="cta"> 
                        <NavLink to={`/categoria/${parseInt(parent)}`}><i><FaAngleLeft/></i> VOLVER</NavLink>
                    </div>
                    </div>         
                </motion.div>
             
                <hr className="hr" />
                <motion.div className="body"
                   initial={{ opacity: 0  }}
                   transition={{delay:0.3, duration:0.9} } 
                   whileInView={{ opacity: 1  }}
                   viewport={{ once: true }}
                >
                  <h2>{meta["nombre-completo"]}</h2>
                  <h4>{meta["caracteristicas"]}</h4>
                  <p>{description}</p>
                  <div className="actions mt-5">
                      <div className="cta"> 
                            <NavLink to="/contacto"> CONTACTO </NavLink>
                        </div>
                      <div className="listFiles subfiles">
                      {meta['links'] && Object.values(meta['links']).map((item, index) => (
                          <div key={index} className="file">
                            <NavLink to={item.link} target="_blank"><span>{item.nombre_link}</span> <i><img src={Icondwn} alt="" /></i></NavLink>
                          </div>
                        ))} 
                      </div> 
                  </div>
                  <h2 className="mt-5">REFERENCIAS</h2>
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-grey">
        <div className="container">
          <div className="row pt-5 pb-5 gap-2">
            {
               relatedProducts.map(product => (
                <CardProdb key={product.id} link={`/producto/${product.id}`} product={product} subCat={subcatId}  />
              ))
            }
             
          </div>
        </div>
      </section>
    </motion.div>
  )
}
