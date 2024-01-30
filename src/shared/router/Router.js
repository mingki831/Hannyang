import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import GlobalRoute from './GlobalRoute';
// import PublicRoute from './PublicRoute';
// import PrivateRoute from './PrivateRoute';

import MainPage from '../../pages/main/MainPage'
import SignUp from '../../pages/signup/SignUp';
import Login from '../../pages/login/Login'
import SignUpSuccess from '../../pages/signup/SignUpSuccess';
import Mypage from '../../pages/mypage/Mypage';
import MypageEdit from '../../pages/mypage/MypageEdit'

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
                <Route path='/signupSuccess' element={<SignUpSuccess/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/mypage' element={<Mypage/>}/>
                <Route path='/mypageEdit' element={<MypageEdit/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Router;