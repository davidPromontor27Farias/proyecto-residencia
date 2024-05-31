import { Navigate, Route, Routes } from 'react-router-dom'
import { HomeApp } from '../pages/HomeApp'



export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomeApp/>} />
        <Route path="/*"  element={<Navigate to="/"/>}/>
    </Routes>
  )
}

