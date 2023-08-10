import { useState } from 'react';
import { motion } from "framer-motion";
import useFethData from '../hooks/useFetchData'
import {galeryUrl} from '../../config'
import { Preloader } from './utils/Preloader';  
export const Galeria = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { loading, result, error } = useFethData(`${galeryUrl}`);
  if (loading) return <Preloader />;

  const Image = Object.values(result.galeria_listado);
  const objUrl = Image.map(item => item.imagen);
  let bodyBox = document.querySelector('body'); 
  // Function to open the lightbox and set the current image index
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.classList.add('open');
  };

  // Function to close the lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);  
    document.body.classList.remove('open');
  };

  // Function to navigate to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? objUrl.length - 1 : prevIndex - 1));
  };

  // Function to navigate to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === objUrl.length - 1 ? 0 : prevIndex + 1));
  };

 
  return (
    <motion.div className="main pHead catBox"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0,transition:{duration:1}}}
    >
     <section>
     <div className="container">
        <div className="row">
      
          <div className="col-md-12 p-5 pb-4">
            <div className="boxRigth">
               <div className="boxTop">
               <div className="boxFiles"> 
                   <h1 className="titularPage">GALERÍA</h1>
                </div> 
               </div>  
            </div>
          </div>
        </div>
      </div>
     </section>
     <section className="bgGal">
     <div className="container">
        <div className="row"> 
          <div className="col-md-12 px-5 pb-5 pt-1">  
          <div className="griImg">
                {objUrl 
                  && objUrl.map((image, i) => (
                        <motion.img
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block"}}
                            alt=""
                            loading="lazy"
                            onClick={() => openLightbox(i)} 
                            
                            initial={{ opacity: 0, y:"10%" }}
                            transition={{delay:0.6, duration:1} } 
                            whileInView={{ opacity: 1, y:0 }}
                            viewport={{ once: true }}
                       // Open lightbox on click
                        />
                    ))} 
          </div>
            {/* Lightbox */}
            {lightboxOpen && (
                    <motion.div className={`lightbox ${lightboxOpen ? 'open' : ''}`}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0,transition:{duration:1}}}
                    >
                      <span className="close" onClick={closeLightbox}>
                      
                      </span>
                      <motion.img
                      initial={{ opacity: 0  }}
                      transition={{delay:0.3, duration:0.9} } 
                      whileInView={{ opacity: 1 }} 
 
                      src={objUrl[currentImageIndex]} loading="lazy" alt="" />

                      <div className="filter"></div>
                      <span className="arrowl" onClick={prevImage}>
                       
                      </span>
                      <span className="arrowr" onClick={nextImage}>
                   
                      </span>
                    </motion.div>
                  )}
          </div>
        </div>
      </div>
     </section>
    </motion.div>
  )
}