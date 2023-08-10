import { useState } from 'react';
import { motion } from 'framer-motion'  
import GoogleMapComponent from './map/GoogleMapComponent'
import { Button, TextField } from '@mui/material'
import { FaTelegramPlane } from "react-icons/fa"  
import { useFormik } from 'formik'
import  * as Yup from "yup"
export const Contacto = () => {
 
  // let initialValues = {
  //   name: "",
  //   lastname: "",
  //   phone:"",
  //   email:"",
  //   mensaje:""
  // }

  // const enviarform = (data) =>{
  //   console.log(data)
  // }

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
    onSubmit: (data) =>{
      console.log(data)
    }
  })
 
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
              <h5>Atención al Cliente:</h5><p>Tels. +57 1 2 01 94 46 - +57 1 201 81 21</p><p>Fax. +57 1 3 71 02 14</p><h5>Ubicación:</h5><p>Carrera 32 Nº 13 - 36 - Bogotá, COLOMBIA</p>
              </div>
    <div className="map">
    <GoogleMapComponent/>
    </div>
            </motion.div>
          </div>
        </div>
      </section>

    </motion.div>
  )
}
