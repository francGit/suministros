import { useState } from 'react';
import { motion } from 'framer-motion'  
// import GoogleMapComponent from './map/GoogleMapComponent'
import { Button, TextField, Modal, Box, Typography } from '@mui/material'
import { FaTelegramPlane } from "react-icons/fa"  
import { useFormik } from 'formik'
import useFethDataOption from '../hooks/useFetchDataOption'
import {optiontUrl} from '../../config'
import { Preloader } from './utils/Preloader';
import axios from 'axios';

import  * as Yup from "yup"
export const Contacto = () => {
  const {loadingOption, resultOption, errorOption} = useFethDataOption(`${optiontUrl}`) 
 
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const {handleSubmit,handleChange,values, errors } = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      phone:"",
      email:"",
      mensaje:""
    },
    validationSchema:Yup.object({
      name:Yup.string().required("Debes ingresar un nombre"),
      lastname:Yup.string().required("Debes ingresar un apellido"),
      phone:Yup.number().required("Debes ingresar un teléfono"),
      email:Yup.string().required("Debes ingresar un email"),
      mensaje:Yup.string().required("Debes ingresar un mensaje"),
    }),
    onSubmit: async (data) =>{
      console.log(data)
      setShowModal(true);
    }, 
  })
  if(loadingOption) return <Preloader/>
 
  return (
    <motion.div className='main pHead'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0,transition:{duration:1}}}
    >

      <section className='Contact'>
        <div className="container">
          <div className="row">
            <div className="col-md-7 pt-5">
                <h1 className='titulo'>Contacto</h1>
               
               <form className="form" onSubmit={handleSubmit}>
                  <div className="row pt-5">
                    <motion.div className="col-md-6 mb-4"
                    initial={{ opacity: 0, y:"30%" }}
                       transition={{delay:0.3, duration:0.9} } 
                       whileInView={{ opacity: 1, y:0 }}
                       viewport={{ once: true }}
                    >
                      <TextField
                        fullWidth
                        type='text'
                        id='name'
                        label='Nombre'
                        variant='outlined'
                        name='name'
                        onChange={handleChange}
                        value={values.name}
                        error={!!errors.name} // Convertir el objeto de error en un valor booleano
                        helperText={errors.name}
                      />
                    </motion.div>
                    <motion.div className="col-md-6 mb-4"
                    initial={{ opacity: 0, y:"30%" }}
                       transition={{delay:0.3, duration:0.9} } 
                       whileInView={{ opacity: 1, y:0 }}
                       viewport={{ once: true }}
                    >
                      <TextField
                      fullWidth={true} 
                      type='text' 
                      id="lastname" 
                      label="Apellidos" 
                      variant="outlined" 
                      name='lastname'  
                      onChange={ handleChange }
                      value={values.lastname}
                      error={!!errors.lastname}
                      helperText={errors.lastname}
                      />
                    </motion.div>
                    <motion.div className="col-md-6 mb-4"
                    initial={{ opacity: 0, y:"30%" }}
                       transition={{delay:0.3, duration:0.9} } 
                       whileInView={{ opacity: 1, y:0 }}
                       viewport={{ once: true }}
                    >
                      <TextField 
                      fullWidth={true} 
                      type='text' 
                      id="phone" 
                      label="Teléfono" 
                      variant="outlined" 
                      name='phone'  
                      onChange={handleChange}
                      value={values.phone}
                      error={!!errors.phone}
                      helperText={errors.phone}
                      />
                    </motion.div>
                    <motion.div className="col-md-6 mb-4"
                    initial={{ opacity: 0, y:"30%" }}
                       transition={{delay:0.3, duration:0.9} } 
                       whileInView={{ opacity: 1, y:0 }}
                       viewport={{ once: true }}
                    >
                      <TextField 
                      fullWidth={true} 
                      type='email' id="email" 
                      label="Email" 
                      variant="outlined" 
                      name='email'  
                      onChange={handleChange}
                      value={values.email}
                      error={!!errors.email}
                      helperText={errors.email}
                      />
                    </motion.div>
                    <motion.div className="col-md-12 mb-4"
                    initial={{ opacity: 0, y:"30%" }}
                       transition={{delay:0.3, duration:0.9} } 
                       whileInView={{ opacity: 1, y:0 }}
                       viewport={{ once: true }}
                    >
                      <TextField 
                      fullWidth={true} 
                      type='text-area' 
                      id="email" 
                      label="Mensaje" 
                      variant="outlined"
                      name='mensaje'  
                      multiline  rows={4} 
                      onChange={handleChange}
                      value={values.mensaje}
                      error={!!errors.mensaje}
                      helperText={errors.mensaje}
                      />
                    </motion.div>
                    <motion.div className="col-md-12 mb-4"
                      initial={{ opacity: 0, y:"30%" }}
                      transition={{delay:0.3, duration:0.9} } 
                      whileInView={{ opacity: 1, y:0 }}
                      viewport={{ once: true }}
                    >
                    <Button type='submit' variant="contained" color="error" id='sendContact' size="large" >
                      Enviar Formulario   <i className='mx-2'><FaTelegramPlane/></i>
                    </Button>
                    </motion.div>
                  </div> 

               </form> 
            </div>
            <motion.div className="col-md-5 p-5"
              initial={{ opacity: 0, x:"30%" }}
              transition={{delay:0.3, duration:0.9} } 
              whileInView={{ opacity: 1, x:0 }}
              viewport={{ once: true }}
            >
              <div className="info pb-4">
              <div dangerouslySetInnerHTML={{ __html: resultOption.info_contacto }}/>
              </div>
    <div className="map">
    <div className="grpelem" id="u1709"> 
    <iframe src="https://www.google.es/maps/d/u/0/embed?mid=1PyTd-9_hb2WXuNRTuz6tWFXA1BcGvus&ehbc=2E312F" width="100%" height="380"/><br /><small>Ver <a href="https://www.google.es/maps/d/u/0/edit?mid=1PyTd-9_hb2WXuNRTuz6tWFXA1BcGvus&usp=sharing"  >Suministros SIS</a> en un mapa más grande</small>
       </div>
    {/* <GoogleMapComponent/> */}
    </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Modal
      open={showModal}
      onClose={handleCloseModal}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: 4 }}>
      <Typography id="modal-title" variant="h6" component="h2">
          ¡Espera un poco más!
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }}>
          Debes esperar un tiempo antes de enviar otro correo.
        </Typography>
        <Button sx={{ mt: 3 }} variant="contained" onClick={handleCloseModal}>
          Entendido
        </Button>
      </Box>
    </Modal>

    </motion.div>

    
  )
}
