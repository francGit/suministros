import { NavLink, useParams } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import Icondwn from '../assets/Iconly-Download-red.svg'   
import { ContacBanner } from "./utils/ContacBanner";
import { motion } from "framer-motion";
import useFethData from '../hooks/useFetchData' 
import useFethSubCat from '../hooks/useFetchSub'  
import {catUrlWp} from '../../config' 
import { Preloader } from './utils/Preloader'; 
import CardSubCat from './layout/CardSubCat';

export const Categoria = () => { 
  const { id } = useParams();
  const { loading, result, error } = useFethData(`${catUrlWp}/${id}`);    
  const { loadingCat, dataCat, errorCat } = useFethSubCat(`${catUrlWp}/?per_page=20`);    
  if (loading || loadingCat) {
    return <Preloader />;
  } 
  const { description, name, meta} = result;
  console.log(result)  
  
  return (
    <motion.div className="main pHead catBox"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0,transition:{duration:1}}}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 p-0">
            <div className="boxLeft p-5">
              <div className="brand">
                {
                  meta["marca_logo"] != "" ? 
                <img src={meta["marca_logo"]} alt="" className="img-fluid" /> : <h2>{name}</h2>
                }
              </div>
              <div className="info">
                {
                  description&& description 
                }
                 
              </div>
              <div className="overlay">
                <img src="../bg1.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-8 p-5">
            <div className="boxRigth">
               <div className="boxTop">
               <div className="boxFiles">
                  <span className="flag">
                      <img src={meta["bandera-pais"]} alt={meta["pais"]} />
                  </span>
                  <div className="listFiles">
                    
                    {meta['links'] && Object.values(meta['links']).map((item, index) => (
                    <div key={index} className="file">
                      <NavLink to={item.link} target="_blank"><span>{item.nombre_link}</span> <i><img src={Icondwn} alt="" /></i></NavLink>
                    </div>
                  ))}


                   
                   {/* <div className="file">
                          <NavLink to={ meta['links'].link} target="_blank"><span>{ meta['links'].nombre_link}</span> <i><img src={Icondwn} alt="" /></i></NavLink>
                        </div> */}
                   
                  </div> 
                </div>
                <div className="cta"> 
                  <NavLink to="/productos"><i><FaAngleLeft/></i> VOLVER</NavLink>
              </div>
             
               </div>
               <hr className="hrline" />
               <div className="contCards">
               {dataCat
                .filter(subcategoria => subcategoria.parent === parseInt(id)) // Filtra las subcategorías por su parent ID
                .map((subcategoria, index) => (
                  <CardSubCat key={index} subcategoria={subcategoria} />
                ))}

               {/* {dataCat.map((subcategoria, index) => ( 
                    <CardSubCat key={index} subcategoria={subcategoria} />
                 
                ))}  */}
                   
                    <ContacBanner/>
               </div>


            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
