 import { motion } from "framer-motion"
import { NavLink, useParams } from "react-router-dom"
import { FaAngleLeft } from "react-icons/fa"
import Icondwn from '../assets/Iconly-Download-red.svg'  
import CardProdb  from "./layout/CardProdb"
import useFethSubCat from '../hooks/useFetchSub' 
import {subcatUrl} from '../../config'
import { Preloader } from './utils/Preloader';  
 export const SubCategoria = () => {
  const { id } = useParams(); 
  const { loadingCat, dataCat, errorCat } = useFethSubCat(`${subcatUrl}/${id}`)
  console.log(dataCat)
  
  if (loadingCat) return <Preloader />; 
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
              <div className="infoImg">
                <div className="body">
                <img src={dataCat.imagen_sub_categoria} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="infoSub">
              <div className="breadcrumbs">
                    <small>PRODUCTOS/INDESUR/</small>
                </div> 
                <div className="header">
                <div className="origen">
                <small>País de origen:</small>
                <span className="flag"><img src="../arg.png" alt="" /></span>
                </div>
                
                  <div className="actions">
                    <div className="brand">
                      <img src="./indesur.png" className="img-fluid" alt="" />
                    </div>
                    <div className="cta"> 
                        <NavLink to="/categoria/1"><i><FaAngleLeft/></i> VOLVER</NavLink>
                    </div>
                    </div>         
                </div>
             
                <hr className="hr" />
                <div className="body">
                  <h2>BOMBAS NEUMÁTICAS DE DOBLE DIAFRAGMA</h2>
                  <h4>Línea Indesur de Bombas Neumáticas abarca un rango de caudal de 1,5 a 48m3/h</h4>
                  <p>Las bombas de metal son las indicadas para el manejo de hidrocarburos, solventes y barros. Son ideales para trabajo pesado y a altas temperaturas. Se las utiliza habitualmente como bombas de achique o de trasvase de líquidos inflamables. La parte mojada de estos equipos está construida en aluminio fundido, fundición gris o acero al carbono.</p>
                  <div className="actions mt-5">
                      <div className="cta"> 
                            <NavLink > CONTACTO </NavLink>
                        </div>
                      <div className="listFiles">
                        <div className="file">
                            <NavLink><span>FOLLETO</span> <i><img src={Icondwn} alt="" /></i></NavLink>
                        </div> 
                      
                      </div> 
                  </div>
                  <h2 className="mt-5">REFERENCIAS</h2>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-grey">
        <div className="container">
          <div className="row pt-5 pb-5 gap-2">
            <CardProdb link={'/producto/1'} />
            <CardProdb link={'/producto/1'} />
            <CardProdb link={'/producto/1'} />
            <CardProdb link={'/producto/1'} />
          </div>
        </div>
      </section>
    </motion.div>
  )
}
