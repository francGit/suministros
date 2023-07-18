import { NavLink } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import Icondwn from '../assets/Iconly-Download-red.svg'  
import CardProd from "./layout/CardProd";
import { ContacBanner } from "./utils/ContacBanner";
import { motion } from "framer-motion";

export const Categoria = () => {
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
                <img src="./indesur.png" alt="" className="img-fluid" />
              </div>
              <div className="info">
                <p>
                  Iniciada como una industria de metalúrgica general, la empresa
                  ha crecido y se ha especializado en la producción de Bombas
                  Neumáticas, convirtiéndose en un referente en la Argentina.
                </p>
                <p>
                  Dirigida por sus fundadores, la compañía basa su desarrollo en
                  una permanente actualización tecnológica, caracterizándose por
                  la atención personalizada, un dedicado asesoramiento técnico y
                  un servicio pos venta confiable.
                </p>
                <p>
                  La compañía desarrolla en instalaciones propias todo el
                  proceso de producción de sus equipos, incluyendo las etapas de
                  mecanizado, montaje, ensayo, terminación y embalaje. Un sector
                  específico está destinado al servicio técnico pos-venta.
                </p>
                <p>
                  A fin de asegurar el cumplimiento de las necesidades y
                  requerimientos de mercados cada día más exigentes, INDESUR ha
                  desarrollado un Sistema de Gestión basado en la Norma ISO
                  9001.
                </p>
                <p>Este sistema se encuentra certificado desde el año 2005.</p>
              </div>
              <div className="overlay">
                <img src="./bg1.png" className="img-fluid" alt="" />
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
                    <CardProd link={'/subcategoria'}/>
                    <CardProd link={'/subcategoria'}/>
                    <CardProd link={'/subcategoria'}/>
                    <CardProd link={'/subcategoria'}/> 
                    <ContacBanner/>
               </div>


            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
