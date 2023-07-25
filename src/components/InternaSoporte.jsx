import { NavLink } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import Icondwn from '../assets/Iconly-Download-red.svg'   
import { ContacBanner } from "./utils/ContacBanner";
import { motion } from "framer-motion";
import CardSoporte from "./layout/CardSoporte";

export const InternaSoporte = () => {
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
                <img src="../indesur.png" alt="" className="img-fluid" />
              </div>
              <div className="info">
                <p>
                  Iniciada como una industria de metalúrgica general, la empresa
                  ha crecido y se ha especializado en la producción de Bombas
                  Neumáticas, convirtiéndose en un referente en la Argentina.
                </p> 
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
                      <img src="./arg.png" alt="" />
                  </span>
               
                </div>
                <div className="cta"> 
                  <NavLink to="/soporte"><i><FaAngleLeft/></i> VOLVER</NavLink>
              </div>
             
               </div>
               <hr className="hrline" />
               <div className="contCards">
               <div className="file">
                        <NavLink><span>FOLLETO</span> <i><img src={Icondwn} alt="" /></i></NavLink>
                    </div>
                    <ContacBanner/>
               </div>


            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
