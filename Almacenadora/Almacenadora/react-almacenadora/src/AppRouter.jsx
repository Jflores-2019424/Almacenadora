import { Navigate, Route, Routes } from 'react-router-dom';
import {TareaTable} from "./tarea/components/TareaTable";
import {Login} from "./login/components/Login"
import { isUserAuthenticated } from "./login/helpers/LoginHelper";
import { listStorage } from './User/api/UserApi';
import { useEffect } from 'react';

export const AppRouter = () => {

    return(
        <>
            <Routes>
                <Route 
                path="/" 
                element={
                    isUserAuthenticated() ? (
                    <TareaTable/>
                    ) : (
                        <Navigate to="/login"></Navigate>
                        )
                        }
                        ></Route>
                <Route 
                path="/login"
                element={
                    !isUserAuthenticated() ? (
                    <Login></Login> 
                    ) : (
                    <Navigate to="/"></Navigate>
                    )
                    }
                    ></Route>
            </Routes>  
        </>
    );
};