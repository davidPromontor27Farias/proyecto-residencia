import { Navigate, Route, Routes } from "react-router-dom"
import LoginPage from "../Pages/LoginPage"
import { Register } from "../Pages/Register"


export  const AuthRoutes = () => {
  return (
    <Routes>

        <Route path="login" element={<LoginPage/>}/>
        <Route path="register" element={<Register/>}/>

        <Route path="/*" element={<Navigate to="/auth/login"/>}/>
    </Routes>
  )
}
