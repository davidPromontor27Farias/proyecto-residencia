import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from "../Auth/routes/AuthRoutes"
import { AppRoutes} from "../ProyectoResidencia/routes/AppRoutes"
import { useDispatch, useSelector } from "react-redux"
import { CheckingAuth } from "../ui/components/CheckingAuth"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { FirebaseAuth } from "../firebase/config"
import { login, logout } from "../store/auth/authSlice"

export const AppRouter = () => {

  const {status} = useSelector(state => state.auth)
  const dispatch = useDispatch();


  useEffect(() => {

    onAuthStateChanged( FirebaseAuth, async(user) => {
      if(!user) return; dispatch(logout());
      const {displayName, uid, photoURL, phoneNumber, email} = user;
    
      dispatch(login({displayName, uid, photoURL, phoneNumber, email}))

    })
  }, [])



  if(status === 'checking'){
     return <CheckingAuth/>
  }

  return (
    <Routes>
        {
          (status === 'authenticated')
          ?
           <Route path="/*" element={<AppRoutes/>} />
          :  <Route path="/auth/*" element={<AuthRoutes/>} />
          
        }

        <Route path="/*" element={<Navigate to="/auth/login"/>}/>
      

    </Routes>
  )
}

