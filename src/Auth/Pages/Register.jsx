import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../Layout/AuthLayout"
import {Link as RouterLink} from 'react-router-dom';
import { useForm } from "../../hooks/useForm";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSignInWithEmailAndPassword } from "../../store/auth/thunks";

const fieldsForm = {
  displayName: '',
  email: '',
  phoneNumber: '',
  password: ''
}

//validamos los campos para verificar que todos los campos esten correctamente llenos
const fieldsValidations = {
  displayName: [(value) => value.length > 6, 'Debes de ingresar tu nombre completo'],
  email: [(value) => value.includes('@') && value.includes('.com'), 'El email debe contener un @ y una extension .com'],
  phoneNumber: [(value) => value.length < 11 && value.length > 0 , 'Debes ingresar un numero telefonico valido con una extension de 10 digitos'],
  password: [(value) => value.length > 2 && value.length <= 15, 'Debes de ingresar una contraseña']
}




export const Register = () => {

  const [formSubmitted, setFormSubmitted] = useState(false);
  const dispatch = useDispatch();

  const {displayName, email, phoneNumber, password, formState, onInputChange,
    createValidators, displayNameValid, emailValid, phoneNumberValid, passwordValid, isFormValid
  } = useForm(fieldsForm, fieldsValidations);

  //Sacamos el status y el error message oara momstrarlo en pantalla
  const {status, errorMessage} = useSelector( state => state.auth);
  //nos ponemos al pendiente por el status
  const isCheckingAutentication = useMemo(() => status === 'checking', [status]);



  const onHandleSubmit = (e) => {
    e.preventDefault();
    //Se presiono el boton, se verifican los campos
    setFormSubmitted(true);
    createValidators();

    if(!isFormValid) return;
    dispatch(startSignInWithEmailAndPassword(formState));


  
    }
  


  return (
    <AuthLayout title="register">

          <form 
            className="animate__animated animate__fadeIn "
          onSubmit={onHandleSubmit}>
            <Grid container>
              <Grid
                item 
                xs={12} sx={{mt: 2}}>
               
                  <TextField
                    label="Nombre completo:"
                    type="text"
                    placeholder="Andres Barrientos"
                    color="info"
                    name='displayName'
                    value={displayName}
                    onChange={onInputChange}
                    error={!!displayNameValid && formSubmitted}
                    helperText={displayNameValid}
                    sx={{input: {color: 'white'}}}
                    fullWidth
                  />
              </Grid>
              <Grid
                item 
                xs={12} sx={{mt: 2}}>
               
                  <TextField
                    label="Correo Electronico:"
                    type="email"
                    placeholder="alguien@example.com"
                    color="info"
                    name='email'
                    error={!!emailValid && formSubmitted}
                    helperText={emailValid}
                    value={email}
                    onChange={onInputChange}
                    sx={{input: {color: 'white'}}}
                    fullWidth
                  />
              </Grid>
              <Grid
                item 
                xs={12} sx={{mt: 2}}>
               
                  <TextField
                    label="Numero de telefono:"
                    type="number"
                    placeholder="288-093-3423"
                    color="info"
                    name='phoneNumber'
                    error={!!phoneNumberValid && formSubmitted}
                    helperText={phoneNumberValid}
                    value={phoneNumber}
                    onChange={onInputChange}
                    sx={{input: {color: 'white'}}}
                    fullWidth
                  />
              </Grid>

              <Grid
                item 
                xs={12} sx={{mt: 2}}>
               
                  <TextField
                    label="Contraseña:"
                    type="password"
                    placeholder="*********"
                    color="info"
                    name='password'
                    error={!!passwordValid && formSubmitted}
                    helperText={passwordValid}
                    value={password}
                    onChange={onInputChange}
                    sx={{input: {color: 'white'}}}
                    fullWidth
                  />
              </Grid>
            </Grid>


            
            <Grid 
                item 
                md={12} 
                display={!!errorMessage ? '' : 'none'}
                >
                <Alert severity='error'>
                  {errorMessage}
                </Alert>
              </Grid>

            <Grid
              item
              sm={12}
            >
              <Button
                type="submit"
                fullWidth
                disabled={isCheckingAutentication}
                sx={{mt: 2, padding:2, backgroundColor: "buttonLogin.main", color: 'colorText.main'}}

              >
                Crear cuenta
              </Button>
            </Grid>

            <Grid 
              container 
              direction="row" 
              justifyContent="end"
              marginTop={3}
              >
              <Link component={RouterLink} sx={{color: 'white'}} to={"/auth/login"}>Login</Link>
            </Grid>
          </form>
          

    </AuthLayout>
  )
}