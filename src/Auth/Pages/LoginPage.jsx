import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import {Link as RouterLink} from 'react-router-dom';
import { AuthLayout } from '../Layout/AuthLayout'
import { ConstructionOutlined, Google, Password } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { checkingAuthentication, startLoginWithEmailAndPassword, startOnGoogleSign } from '../../store/auth/thunks';
import { useForm } from '../../hooks/useForm';
import { useState } from 'react';;

const fieldsLogin = {
    email: '',
    password: ''
}

const loginValidation = {
  email: [(value) => value.includes('@') && value.includes('.com'), 'El email debe contener un @ y una extension .com'],
  password: [(value) => value.length > 2 && value.length <= 15, 'Debes de ingresar una contraseña']
}

const LoginPage = () => {
  const [formLoginSubmited, setFormSubmited] = useState(false);
  const dispatch = useDispatch();
  const {errorMessage} = useSelector(state => state.auth);
  const {email, password, onInputChange, formState,
        emailValid, passwordValid, isFormValid
  } = useForm(fieldsLogin, loginValidation);




  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmited(true);

    if(!isFormValid) return;
    
    dispatch(startLoginWithEmailAndPassword(formState))


  }


  const onGoogleSign = () => {
    dispatch(startOnGoogleSign());

  }



  return (
    <AuthLayout title="login">


          <form
            className='animate__animated animate__fadeIn'
          onSubmit={handleSubmit}>
            <Grid container>
              <Grid
                item 
                xs={12} 
                sx={{mt: 2}}
                
              >
               
                  <TextField
                
                    label="Email:"
                    type="email"
                    placeholder="alguien@example.com"
                    color="info"
                    name="email"
                    value={email}
                    error={!!emailValid && formLoginSubmited}
                    helperText={emailValid}
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
                    name="password"
                    error={!!passwordValid && formLoginSubmited}
                    helperText={passwordValid}
                    value={password}
                    onChange={onInputChange}
                    sx={{input: {color: 'white'}}}
                    fullWidth
                  />
              </Grid>
            </Grid>

           
            <Grid 
                display={!!errorMessage ? '' : 'none'}
                sx={{mt: 3}}
                container >
                <Grid 
                  item 
                  md={12} 
                  
                  >
                    <Alert severity='error'>
                      {errorMessage}
                    </Alert>
                </Grid>
              </Grid>

            <Grid 
              container 
              spacing={2}
              sx={{mb: 2, mt:2}}
             >
              
              
              <Grid item xs={12} sm={6} >
                <Button 
                  type="submit" 
                  variant="contained"
                  sx={{backgroundColor: 'buttonLogin.main'}}
                   fullWidth>
                  Login
                </Button>
              </Grid>
              
              <Grid onClick={onGoogleSign}  item xs={12} sm={6} >
                <Button  
                  variant="contained" 
                  sx={{backgroundColor: 'buttonGoogle.main'}}
                
                  fullWidth>
                  <Google/>
                  <Typography sx={{ml: 1}}>Google</Typography>
                </Button>
              </Grid>

            </Grid>

            <Grid 
              container 
              direction="row" 
              justifyContent="end"
              marginTop={3}
              >
              <Link 
                component={RouterLink} 
                to={"/auth/register"}
                sx={{color: "white"}}
               >Crear cuenta</Link>
            </Grid>
          </form>
          



    </AuthLayout>

      
  
  )
}

export default LoginPage
