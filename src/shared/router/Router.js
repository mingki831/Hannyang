import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import GlobalRoute from './GlobalRoute';
// import PublicRoute from './PublicRoute';
// import PrivateRoute from './PrivateRoute';

import MainPage from '../../pages/main/MainPage'
import SignUp from '../../pages/signup/SignUp';

const Router = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                {/* <Route element={<PrivateRoute/>}>
                </Route>

                <Route element={<PublicRoute/>}>
                </Route> */}

                {/* <Route element={<GlobalRoute/>}>
                </Route> */}

                <Route path='/' element={<MainPage/>}/>
                <Route path='*' element={<MainPage/>}/>
                <Route path='/signup' element={<SignUp/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Router;