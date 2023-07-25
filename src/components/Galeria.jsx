import { motion } from "framer-motion";
 
 
import useFethData from '../hooks/useFetchData'
import {galeryUrl} from '../../config'
import { Preloader } from './utils/Preloader';
export const Galeria = () => {
  const {loading, result, error} = useFethData(`${galeryUrl}`)
  if(loading) return <Preloader/>
 
  return (
    <motion.div className="main pHead catBox"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0,transition:{duration:1}}}
    >
     <section>
     <div className="container">
        <div className="row">
      
          <div className="col-md-12 p-5 pb-0">
            <div className="boxRigth">
               <div className="boxTop">
               <div className="boxFiles"> 
                   <h1 className="titularPage">GALERÍA</h1>
                </div>
            
             
               </div>
               <hr className="hrline" />  
            </div>
          </div>
        </div>
      </div>
     </section>
     <section className="bgGal">
     <div className="container">
        <div className="row"> 
          <div className="col-md-12 px-5 pb-5">
          <div className="contCards"> 
              {result.galeria_listado && Object.values(result.galeria_listado).map((item,index)=>(
                 <a key={index}  className="gallery-item" href={item.imagen}>
                 <img className="img-responsive" src={item.imagen} />
               </a>
              )) 
              }
 
             
               </div>
          </div>
        </div>
      </div>
     </section>
    </motion.div>
  )
}
