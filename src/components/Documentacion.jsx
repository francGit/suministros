import { NavLink } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import Icondwn from '../assets/Iconly-Download-red.svg'   
import { ContacBanner } from "./utils/ContacBanner";
import { motion } from "framer-motion";
import CardSoporte from "./layout/CardSoporte";

export const Soporte = () => {
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
                   <h1 className="titularPage">DOCUMENTACIÓN</h1>
                </div>
            
             
               </div>
               <hr className="hrline" />  
            </div>
          </div>
        </div>
      </div>
     </section>
     <section>
     <div className="container">
        <div className="row"> 
          <div className="col-md-12 px-5 pb-5">
          <div className="contCards">
                     <h2>EN CONSTRUCCIÓN</h2>
                    <ContacBanner/>
               </div>
          </div>
        </div>
      </div>
     </section>
    </motion.div>
  )
}
