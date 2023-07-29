import { NavLink, useParams } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import Icondwn from '../assets/Iconly-Download-red.svg'   
import { ContacBanner } from "./utils/ContacBanner";
import { motion } from "framer-motion";
import useFethData from '../hooks/useFetchData' 
import useFethSubCat from '../hooks/useFetchSub' 
import useFethRelCatSub from '../hooks/useFetchRelCatSub' 
import {catUrl} from '../../config'
import {subcatUrl} from '../../config'
import {relCatSubUrl} from '../../config'
import { Preloader } from './utils/Preloader'; 
import CardSubCat from './layout/CardSubCat';
export const Categoria = () => { 
  const { id } = useParams();
  const { loading, result, error } = useFethData(`${catUrl}/${id}`); 
  const { loadingCat, dataCat, errorCat } = useFethSubCat(`${subcatUrl}`); 
  const { loadsub, reldatasub, ersub } = useFethRelCatSub(`${relCatSubUrl}`); 
  if (loading) return <Preloader />;
  const {marca, descripcion, nombre} = result;
  console.log(dataCat)
  
  console.log(reldatasub)
  // const objUrl = Image.map(item => item.imagen);
  
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
                  marca != null ? 
                <img src={marca} alt="" className="img-fluid" /> : <h2>{nombre}</h2>
                }
              </div>
              <div className="info">
                {
                  descripcion&&

                  descripcion

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
                      <img src="../arg.png" alt="" />
                  </span>
                  <div className="listFiles">
                    <div className="file">
                        <NavLink><span>FOLLETO</span> <i><img src={Icondwn} alt="" /></i></NavLink>
                    </div>
                  
                   
                  </div> 
                </div>
                <div className="cta"> 
                  <NavLink to="/productos"><i><FaAngleLeft/></i> VOLVER</NavLink>
              </div>
             
               </div>
               <hr className="hrline" />
               <div className="contCards">
                    {
                      dataCat&& dataCat.map((subcategoria,index)=>(
                        <CardSubCat key={index} subcategoria={subcategoria}  />
                      ))
                    }
                   
                    <ContacBanner/>
               </div>


            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
