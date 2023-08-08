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
                    <div className="col-md-6 mb-4">
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
                    </div>
                    <div className="col-md-6 mb-4">
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
                    </div>
                    <div className="col-md-6 mb-4">
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
                    </div>
                    <div className="col-md-6 mb-4">
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
                    </div>
                    <div className="col-md-12 mb-4">
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
                    </div>
                    <div className="col-md-12 mb-4">
                    <Button type='submit' variant="contained" color="error" id='sendContact' size="large" >
                      Enviar Formulario   <i className='mx-2'><FaTelegramPlane/></i>
                    </Button>
                    </div>
                  </div> 

               </form> 
            </div>
            <div className="col-md-5 p-5">
              <div className="info pb-4">
              <h5>Atención al Cliente:</h5><p>Tels. +57 1 2 01 94 46 - +57 1 201 81 21</p><p>Fax. +57 1 3 71 02 14</p><h5>Ubicación:</h5><p>Carrera 32 Nº 13 - 36 - Bogotá, COLOMBIA</p>
              </div>
    <div className="map">
    <GoogleMapComponent/>
    </div>
            </div>
          </div>
        </div>
      </section>

    </motion.div>
  )
}
