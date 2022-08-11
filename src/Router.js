import { Routes, Route, useNavigate } from 'react-router-dom';
import { Catalog } from './components/Catalog/Catalog';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { useContext } from "react";
import { UserContext } from './context/UserContext';

export const Router = () => {
    const { user } = useContext(UserContext)
    console.log(user);
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/catalog' element={<Catalog />} />
            
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
        </Routes>
    )
}